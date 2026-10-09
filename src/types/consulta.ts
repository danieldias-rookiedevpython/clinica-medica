export interface ConsultaDTO {
  id: number;
  pacienteId: number;
  medicoId: number;
  data: Date;
  hora: string;
  turno: string;
}