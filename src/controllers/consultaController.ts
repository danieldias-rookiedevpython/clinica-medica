import type {Request, Response} from "express";
import * as service from "../services/consultaService.js";
import type {ConsultaDTO} from "../types/consulta.js";
import {id} from "zod/locales";
import {json} from "zod";

export async function obtemUmaConsultaPorId(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    const consulta = await service.obtemUmaConsultaPorId(id);
    if (!consulta) {
        return res.status(404).json({ error: "Consulta não encontrada" });
    }
    return res.json(consulta);
}

export async function criaConsulta(req: Request, res: Response) {
    const consulta: ConsultaDTO = req.body;
    const novaConsulta = await service.criaConsulta(consulta);
    return res.status(201).json(novaConsulta);
}  

export async function atualizaConsulta(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    const consultaAtualizada: Partial<ConsultaDTO> = req.body;
    const consulta = await service.atualizaConsulta(id, consultaAtualizada);
    return res.json(consulta);
}

export async function deletaConsulta(req: Request, res: Response) {
    const id: number = Number(req.params.id);
    const consultaDeletada = await service.deletaConsulta(id);
    return res.json(consultaDeletada);
}
