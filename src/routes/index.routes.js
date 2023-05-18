import { Router } from "express";
import { ping } from "../controllers/index.controller.js";
const rutas = Router();

rutas.get("/ping", ping);

export default rutas;
