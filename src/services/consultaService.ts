import * as repo from "../repositores/consultaRepository.js";
import type { ConsultaDTO } from "../types/consulta.js";

export async function obtemUmaConsultaPorId(id: number) {
    const consulta = await repo.findById(id);
    if (!consulta) throw new Error("Consulta não encontrada");
    return consulta;
}

export async function criaConsulta(consulta: ConsultaDTO) {
    const novaConsulta = await repo.createConsulta(consulta);
    return novaConsulta;
}

export async function atualizaConsulta(id: number, consulta: Partial<ConsultaDTO>) {
    const consultaAtualizada = await repo.updateConsulta(id, consulta);
    return consultaAtualizada;
}

export async function deletaConsulta(id: number) {
    const consultaDeletada = await repo.deleteConsulta(id);
    return consultaDeletada;
}