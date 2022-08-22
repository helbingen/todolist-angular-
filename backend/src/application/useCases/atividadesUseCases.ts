import atividadesRepository from '../../framework/sequelize/repositories/atividadesRepository';

class atividadesUseCases {
  async criarAtividade(pAtividades: string, pUserId: number): Promise<any> {
    const atividades = await atividadesRepository.criarAtividade(
      pAtividades,
      pUserId,
    );
    return atividades;
  }

  async editarAtividade(pBody: any, pId: number): Promise<any> {
    const atividades = await atividadesRepository.editarAtividade(pBody, pId);
    return atividades;
  }

  async removerAtividade(pId: number): Promise<any> {
    const atividades = await atividadesRepository.removerAtividade(pId);
    return atividades;
  }

  async buscarAtividadesPorOrdenacao(
    pUserId: number,
    pNomeDaColunaBd: string,
    pOrdenacaoBd: string,
  ): Promise<any> {
    const atividades = await atividadesRepository.buscarAtividadesPorOrdenacao(
      pUserId,
      pNomeDaColunaBd,
      pOrdenacaoBd,
    );
    return atividades;
  }

  async buscarAtividadePorId(pId: number): Promise<any> {
    const atividades = await atividadesRepository.buscarAtividadePorId(pId);
    return atividades;
  }
}
export default new atividadesUseCases();
