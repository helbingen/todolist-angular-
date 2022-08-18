import { Model } from 'sequelize/types';
import { AtividadesModel } from '../models/AtividadesModel';

class AtividadesRepository {
  criarAtividade(
    pAtividade: string,
    pConcluido: boolean,
    pDataConclusao: Date,
    pUserId: Number,
  ): any {
    let atividades = AtividadesModel.create({
      atividade: pAtividade,
      concluido: pConcluido,
      dataConclusao: pDataConclusao,
      userId: pUserId,
    });
    return atividades;
  }

  editarAtividade(pBody: any, pId: string): void {
    // aqui o ID é string porque é um parametro da URL
    AtividadesModel.update(pBody, { where: { id: pId } });
  }

  removerAtividades(pId: string): void {
    AtividadesModel.destroy({ where: { id: pId } });
  }

  buscarAtividadesPorOrdenacao(
    pUserId: any,
    pOrderParams1: string,
    pOrderParams2: string,
  ): Promise<Model<any, any>[]> {
    let atividades = AtividadesModel.findAll({
      order: [[pOrderParams1, pOrderParams2]],
      where: { userId: pUserId },
    });
    return atividades;
  }

  buscarAtividadePorId(pId: string): any {
    AtividadesModel.findOne({
      where: {
        id: pId,
      },
    });
  }
}

export default new AtividadesRepository();
