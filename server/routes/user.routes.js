import express,{Router} from 'express'
import { clerkWebHooks } from '../controllers/user.controller.js';

const userRouter =Router()

userRouter.post("/webhooks",clerkWebHooks);

export default userRouter;
