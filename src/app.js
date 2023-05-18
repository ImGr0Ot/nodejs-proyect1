import express from "express"
import empleadorutas from "./routes/empleado.routes.js"
import indexRoutes from "./routes/index.routes.js"

const app= express();
app.use(express.json())

app.use(indexRoutes)
app.use('/api', empleadorutas)
app.use((req,res,next)=> {
    res.status(404).json({
        message: 'api no encontrada'
    })
}) 
export default app