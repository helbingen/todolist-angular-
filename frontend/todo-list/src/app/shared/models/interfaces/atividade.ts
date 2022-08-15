export interface IAtividade {
  id: number;
  atividade: string;
  concluido: boolean;
  dataConclusao: Date;
  dataCriacao: Date;
  userId: number;
}

export interface IAtividadeCreate {
  atividade: string;
  concluido: boolean;
  dataConclusao: Date;
  userId: number;
}

export interface IAtividadeUpdate {
  concluido: boolean;
  dataConclusao: Date | null;
}

export interface IUpdate {
  atividade: string;
}
