import express from 'express';
import protectRoute from '../middleware/protectRoute.js';
import { getuserForsidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/",protectRoute,getuserForsidebar)

export default router
