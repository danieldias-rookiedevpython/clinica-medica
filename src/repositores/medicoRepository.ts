import {prisma} from "../lib/prisma.js"
import type { MedicoDTO } from "../types/medico.js";
import type { PacienteDTO } from "../types/paciente.js"

// CRUD de Médico
export async function buscaMedicoPorId(id: number) {
    return await prisma.medico.findUnique({where: {id}})
}

export async function criarUmMedico(dadosMedico: MedicoDTO) {
    return await prisma.medico.create({ data: dadosMedico });
}

export async function atualizarUmMedico(id: number, dadosAtualizados: Partial<MedicoDTO>) {
    return await prisma.medico.update({ where: { id }, data: dadosAtualizados });
}

export async function deletarUmMedico(id: number) {
    return await prisma.medico.delete({ where: { id } });
}