import type { Request, Response } from "express";
import * as service from "../services/medicoService.js";
import type { MedicoDTO } from "../types/medico.js";
import type { PacienteDTO } from "../types/paciente.js";

export async function obtemUmMedico(req: Request, res: Response) {
    const idProcurado: number = Number(req.params.id);
    const medicoFounded = await service.obtemUmMedicoPorId(idProcurado);
    res.json(medicoFounded);
}

export async function criarUmMedico(req: Request, res: Response) {
    const dadosMedico = req.body;
    const medicoCriado = await service.criarUmMedico(dadosMedico);
    res.status(201).json(medicoCriado);
}

export async function atualizarUmMedico(req: Request, res: Response) {
    const idProcurado: number = Number(req.params.id);
    const dadosAtualizados = req.body;
    const medicoAtualizado = await service.atualizarUmMedico(idProcurado, dadosAtualizados);
    res.json(medicoAtualizado);
}

export async function deletarUmMedico(req: Request, res: Response) {
    const idProcurado: number = Number(req.params.id);
    const medicoDeletado = await service.deletarUmMedico(idProcurado);
    res.json(medicoDeletado);
}