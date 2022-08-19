import AtividadesRepository from '../../../framework/sequelize/repositories/AtividadesRepository';

class AtividadesUseCases {
  criarAtividade(
    pAtividades: string,
    pConcluido: boolean,
    pDataConclusao: Date,
    pUserId: number,
  ): any {
    AtividadesRepository.criarAtividade(
      pAtividades,
      pConcluido,
      pDataConclusao,
      pUserId,
    );
  }

  editarAtividade(pBody: object, pId: string): void {
    AtividadesRepository.editarAtividade(pBody, pId);
  }

  removerAtividade(pId: string): void {
    AtividadesRepository.removerAtividade(pId);
  }

  buscarAtividadesPorOrdenacao(
    pUserId: any,
    pNomeDaColunaBd: string,
    pOrdenacaoBd: string,
  ): any {
    return AtividadesRepository.buscarAtividadesPorOrdenacao(
      pUserId,
      pNomeDaColunaBd,
      pOrdenacaoBd,
    );
  }

  buscarAtividadePorId(pId: string): any {
    return AtividadesRepository.buscarAtividadePorId(pId);
  }
}
export default new AtividadesUseCases();
