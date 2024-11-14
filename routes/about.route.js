import express from "express";
const router = express.Router()
import aboutController from "../controller/about.controller.js";

router.get('/about', aboutController)

export default router