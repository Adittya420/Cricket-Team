import express from "express";
import { addUser } from "../controller/user_controller.js";
import { fetchUser } from "../controller/user_controller.js";
import {
  getSingleUser,
  editUser,
  delUser,
} from "../controller/user_controller.js";

const router = express.Router();

router.post("/add", addUser);
router.get("/all", fetchUser);
router.get(`/:id`, getSingleUser);
router.post(`/:id`, editUser);
router.delete(`/:id`, delUser);

export default router;
