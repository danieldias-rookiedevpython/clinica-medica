import {Router} from "express";
import * as controller from "../controllers/consultaController.js" // importa

//CRUD DE CONSULTAS

const router = Router();

router.get("/consultas/:id", controller.obtemUmaConsultaPorId);
router.post("/consultas", controller.criaConsulta);
router.put("/consultas/:id", controller.atualizaConsulta);
router.delete("/consultas/:id", controller.deletaConsulta);

export default router;