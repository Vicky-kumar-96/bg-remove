import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connetDB from './db/db.js';
import userRouter from './routes/user.routes.js';


// App config
dotenv.config();
const PORT=process.env.PORT||4000;
const app = express();


// MiddleWares
app.use(express.json())
app.use(cors());

app.get("/",(req,res)=>{
  res.send("Api working");
})

app.use('/api/user',userRouter)

try {
  await connetDB();
  app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
  })
} catch (error) {
  console.error('Server startup failed:', error);
  process.exitCode = 1;
}
