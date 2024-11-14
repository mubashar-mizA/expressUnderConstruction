import express from "express";
const router = express.Router()
import homeRoute from './home.route.js'
import aboutRoute from './about.route.js'
import contactRoute from './contact.route.js'

router.use('/', homeRoute)
router.use('/', aboutRoute)
router.use('/', contactRoute)

export default router
