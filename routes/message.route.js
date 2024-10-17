import expess from "express";
import MessageController from "../controller/message.controller.js";
import path from "path";

const router = express.Router();

router.route("/message/:id").get(MessageController.getMessageById);
router.route("/create-message").post(MessageController.postNewMessage);