import express from "express"
import cors from "cors"
import { likeRestaurant } from "./controllers/likeController.js"
import { rootRouter } from "./routers/rootRoutes.js"
const app = express()

app.use(express.json())
app.use(cors(["http://localhost:3000"]))
app.listen(7000)
app.use("/api", rootRouter)