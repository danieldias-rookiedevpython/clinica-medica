import {prisma} from '../lib/prisma.js';
import type { ConsultaDTO } from '../types/consulta.js';


export async function findById(id: number): Promise<ConsultaDTO | null> {
  return await prisma.consulta.findUnique({
    where: { id },
  });
}

export async function createConsulta(consulta: ConsultaDTO): Promise<ConsultaDTO> {
  return await prisma.consulta.create({
    data: consulta,
  });
}

export async function updateConsulta(id: number, consulta: Partial<ConsultaDTO>): Promise<ConsultaDTO> {
  return await prisma.consulta.update({
    where: { id },
    data: consulta,
  });
}

export async function deleteConsulta(id: number): Promise<ConsultaDTO> {
  return await prisma.consulta.delete({
    where: { id },
  });
}