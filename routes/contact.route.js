import express from "express";
const router = express.Router()
import contactController from "../controller/contact.controller.js";

router.get('/contact', contactController)

export default router