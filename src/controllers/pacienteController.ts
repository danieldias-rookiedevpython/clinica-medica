import type { Request, Response } from "express";
import * as service from "../services/pacienteService.js"
import { id } from "zod/locales";
import { json } from "zod";
import type { Paciente } from "../generated/prisma/client.js";
import type {PacienteDTO} from "../types/paciente.js"

export async function obtemUmPaciente(req: Request, res: Response) {
    const idProcurado: number = Number(req.params.id);
    const userFounded = await service.obtemUmPacientePorId(idProcurado); // chamada do método de busca (services)
    res.json(userFounded); // preparação da Response
};

export async function criarUmPaciente(req: Request, res: Response) {
    const dadosPaciente: PacienteDTO = req.body;
    const pacienteCriado = await service.criarUmPaciente(dadosPaciente);
    res.status(201).json(pacienteCriado)
}

export async function atualizarUmPaciente(req: Request, res: Response) {
    const idProcurado: number = Number(req.params.id);
    const userFounded = await service.obtemUmPacientePorId(idProcurado); // chamada do método de busca (services)
    res.json(userFounded); //response
}

export function deletarUmPaciente(req: Request, res: Response) {
    const idProcurado: number = Number(req.params.id);
    const userFounded = service.obtemUmPacientePorId(idProcurado); // chamada do método de busca (services)
    res.json(userFounded); // responser
}

