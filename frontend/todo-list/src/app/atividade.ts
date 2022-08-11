export interface Atividade {
  id: number;
  atividade: string;
  concluido: boolean;
  dataConclusao: Date;
  dataCriacao: Date;
  userId: number;
}

export interface AtividadeCreate {
  atividade: string;
  concluido: boolean;
  dataConclusao: Date;
  userId: number;
}

export interface AtividadeUpdate {
  concluido: boolean;
  dataConclusao: Date | null;
}

export interface Update {
  atividade: string;
}
