import express from "express";
import { watch } from "../controllers/videoControllers";
const videoRouter = express.Router();

videoRouter.get("/", watch);

export default videoRouter;
