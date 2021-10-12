import express from "express";
import { uploadVideo } from "../../middlewares";
import {
  home,
  getUpload,
  postUpload,
  getSearch,
} from "../controllers/videoControllers";
const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter
  .route("/upload")
  .get(getUpload)
  .post(uploadVideo.single("uploadVideo"), postUpload);

globalRouter.route("/search").get(getSearch);

export default globalRouter;
