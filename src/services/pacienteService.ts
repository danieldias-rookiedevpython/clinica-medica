import * as repo from "../repositores/pacienteRepository.js"
import type { Paciente } from "../generated/prisma/client.js"
import type { PacienteDTO } from "../types/paciente.js"
import type { MedicoDTO } from "../types/medico.js"

// Fazer as outras funções de paciente e resouces
export async function obtemUmPacientePorId(id: number) {
    const paciente: Paciente | null =  await repo.buscaPacientePorId(id);
    if (!paciente) throw new Error("Paciente não encontrado");
    return paciente; 
};

export async function criarUmPaciente(dadosPaciente: PacienteDTO) {
    return await repo.criarUmPaciente(dadosPaciente);
}

export async function atualizarUmPaciente(id: number, dadosAtualizados: Partial<PacienteDTO>) {
    return await repo.atualizarUmPaciente(id, dadosAtualizados);
}

export async function deletarUmPaciente(id: number) {
    return await repo.deletarUmPaciente(id);
}
