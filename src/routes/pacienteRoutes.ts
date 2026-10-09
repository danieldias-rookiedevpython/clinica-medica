import { Router } from "express";
import * as controller from "../controllers/pacienteController.js" // importa

const router = Router();

//router.get("/pacientes")
router.get("/pacientes/:id", controller.obtemUmPaciente);
router.post("/pacientes", controller.criarUmPaciente);
router.put("/pacientes/:id", controller.atualizarUmPaciente);
router.delete("/pacientes/:id", controller.deletarUmPaciente);


// Outros EndPoints

export default router;