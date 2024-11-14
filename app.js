import express from "express";
const app = express()
const port = 3310
import webRoutes from  './routes/web.route.js'
import underConstruction from "./middlewares/underConst.middleware.js";


app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(underConstruction)
app.use('/', webRoutes)



app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`)
})