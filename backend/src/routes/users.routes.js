import { Router } from "express";
import {
  login,
  register,
  getUserHistory,
  addToHistory,
  deleteHistory,
} from "../controllers/user.controller.js";

const router = Router();

router.route("/login").post(login);
router.route("/register").post(register);
router.route("/add_to_activity").post(addToHistory);
router.route("/get_all_activity").get(getUserHistory);
router.route("/delete_history").delete(deleteHistory);


export default router;