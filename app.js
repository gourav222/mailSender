import express from "express";
import cors from "cors";
import {
  authorize,
  listLabels,
  saveCredentials,
  loadSavedCredentialsIfExist,
} from "./mailController.js";
const app = express();
const router = express.Router();
router.route("/login").get(authorize);
app.use(router);
export default app;
