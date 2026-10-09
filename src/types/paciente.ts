import { email, string } from "zod"

export interface PacienteDTO {
    id: number;
    nome: string;
    telefone: string;
    cpf: string;
    email: string;
}