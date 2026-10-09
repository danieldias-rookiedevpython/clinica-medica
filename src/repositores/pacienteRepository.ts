import {prisma} from "../lib/prisma.js"
import type { PacienteDTO } from "../types/paciente.js"
import type {MedicoDTO} from "../types/medico.js"

export async function buscaPacientePorId(id: number) {
    return await prisma.paciente.findUnique({where: {id}})
};

export async function criarUmPaciente(dadosPaciente: PacienteDTO) {
    return await prisma.paciente.create({ data: dadosPaciente});
};

export async function atualizarUmPaciente(id: number, dadosAtualizados: Partial<PacienteDTO>) {
    return await prisma.paciente.update({ where: { id }, data: dadosAtualizados });
};

export async function deletarUmPaciente(id: number) {
    return await prisma.paciente.delete({ where: { id } });
};

