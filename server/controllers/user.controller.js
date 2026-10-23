import { Webhook } from 'svix';
import { User } from '../models/user.model.js';

// API controller function for to Manage Clerk User with database
// http://localhost:4000/api/user/webhooks

const clerkWebHooks = async (req, res) => {
  let evt;

  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    evt = whook.verify(req.body, {
      'svix-id': req.headers['svix-id'],
      'svix-timestamp': req.headers['svix-timestamp'],
      'svix-signature': req.headers['svix-signature'],
    });
  } catch (error) {
    console.error('Clerk webhook verification failed:', error.message);
    return res.status(400).json({ success: false, message: 'Invalid webhook signature or payload' });
  }

  const { data, type } = evt;
  console.log(`Received Clerk webhook event: ${type}`);

  try {
    switch(type){
      case "user.created":{
        const emails = Array.isArray(data.email_addresses) ? data.email_addresses : [];
        const primaryEmail = emails.find(({ id }) => id === data.primary_email_address_id) ?? emails[0];

        if (!data.id || !primaryEmail?.email_address) {
          return res.status(400).json({ success: false, message: 'Clerk user event is missing an ID or email address' });
        }

        const userData={
          clerkId:data.id,
          email:primaryEmail.email_address,
          firstName:data.first_name,
          lastName:data.last_name,
          photo:data.image_url
        }
        await User.findOneAndUpdate(
          { clerkId: data.id },
          { $set: userData },
          { upsert: true, setDefaultsOnInsert: true, runValidators: true }
        );
        res.json({})
        break;
      }

      case "user.updated":{
        const emails = Array.isArray(data.email_addresses) ? data.email_addresses : [];
        const primaryEmail = emails.find(({ id }) => id === data.primary_email_address_id) ?? emails[0];

        if (!data.id || !primaryEmail?.email_address) {
          return res.status(400).json({ success: false, message: 'Clerk user event is missing an ID or email address' });
        }

        const userData={
          email:primaryEmail.email_address,
          firstName:data.first_name,
          lastName:data.last_name,
          photo:data.image_url
        }
        await User.findOneAndUpdate(
          { clerkId: data.id },
          { $set: userData },
          { upsert: true, setDefaultsOnInsert: true, runValidators: true }
        );
        res.json({})
        break;
      }

      case "user.deleted":{
        if (!data.id) {
          return res.status(400).json({ success: false, message: 'Clerk user event is missing an ID' });
        }
        await User.deleteOne({clerkId:data.id});
        res.json({})
        break;
      }

      default:{
        res.json({})
        break;
      }
    }

  } catch (error) {
    console.error('Failed to process Clerk webhook:', error.message);
    res.status(500).json({ success: false, message: 'Failed to process Clerk webhook' });
  }
};

export {clerkWebHooks}
