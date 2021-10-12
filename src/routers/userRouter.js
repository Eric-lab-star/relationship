import express from "express";
import { join } from "../controllers/userControllers";
const userRouter = express.Router();

userRouter.get("/", join);

export default userRouter;
