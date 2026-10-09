import * as repo from "../repositores/medicoRepository.js";
import type { MedicoDTO } from "../types/medico.js";

// CRUD de Médico
export async function obtemUmMedicoPorId(id: number) {
    const medico = await repo.buscaMedicoPorId(id);
    if (!medico) throw new Error("Médico não encontrado");
    return medico;
}

export async function criarUmMedico(dadosMedico: MedicoDTO) {
    return await repo.criarUmMedico(dadosMedico);
}

export async function atualizarUmMedico(id: number, dadosAtualizados: Partial<MedicoDTO>) {
    return await repo.atualizarUmMedico(id, dadosAtualizados);
}

export async function deletarUmMedico(id: number) {
    return await repo.deletarUmMedico(id);
}