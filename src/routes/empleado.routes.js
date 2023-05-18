import {Router} from "express";
import { getEmpleado,getEmpleados, setEmpleado, updateEmpleado, deleteEmpleado } from "../controllers/empleado.controllers.js";


const router = Router()

router.get('/empleado', getEmpleados)

router.get('/empleado/:id', getEmpleado)

router.post('/empleado', setEmpleado )

router.patch('/empleado/:id', updateEmpleado)

router.delete('/empleado/:id', deleteEmpleado )


export default router 