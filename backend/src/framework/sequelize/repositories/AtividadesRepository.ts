import { atividadesModel } from '../models/atividadesModel';
import { Model } from 'sequelize/types';

class atividadesRepository {
  async criarAtividade(pAtividade: string, pUserId: Number): Promise<any> {
    const atividades = await atividadesModel.create({
      atividade: pAtividade,
      userId: pUserId,
    });
    return atividades;
  }

  async editarAtividade(pBody: any, pId: number): Promise<any> {
    const [qtdRegistros, registros] = await atividadesModel.update(pBody, {
      where: { id: pId },
      returning: true,
    });
    return registros;
  }

  async removerAtividade(pId: number): Promise<any> {
    const atividades = await atividadesModel.destroy({
      where: { id: pId },
    });
    return atividades;
  }

  async buscarAtividadesPorOrdenacao(
    pUserId: number,
    pOrderParams1: string,
    pOrderParams2: string,
  ): Promise<Model<any, any>[]> {
    const atividades = await atividadesModel.findAll({
      order: [[pOrderParams1, pOrderParams2]],
      where: { userId: pUserId },
    });
    return atividades;
  }

  async buscarAtividadePorId(pId: number): Promise<any> {
    const atividades = await atividadesModel.findOne({
      where: {
        id: pId,
      },
    });
    return atividades;
  }
}

export default new atividadesRepository();
