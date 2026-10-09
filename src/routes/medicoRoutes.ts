import {Router} from "express";
import * as controller from "../controllers/medicoController.js" // importa

const router = Router();

// Rotas de Médicos
router.get("/medicos/:id", controller.obtemUmMedico);
router.post("/medicos", controller.criarUmMedico);
router.put("/medicos/:id", controller.atualizarUmMedico);
router.delete("/medicos/:id", controller.deletarUmMedico);

export default router;