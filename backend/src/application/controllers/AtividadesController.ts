import { Request, Response } from 'express';
import atividadesUseCases from '../../domain/useCases/atividades.useCases';
import AtividadesRepository from '../../framework/sequelize/repositories/AtividadesRepository';

class AtividadesController {
  async criarAtividade(pReq: Request, pRes: Response): Promise<any> {
    const { atividade, concluido, dataConclusao, userId } = pReq.body;
    atividadesUseCases.verificaIdUndefined(userId, pRes);
    const atividades = await AtividadesRepository.criarAtividade(
      atividade,
      concluido,
      dataConclusao,
      userId,
    );
    return atividades
      ? pRes.status(201).json(atividades)
      : pRes.status(404).send();
  }

  async editarAtividade(pReq: Request, pRes: Response): Promise<any> {
    const { id } = pReq.params;
    await AtividadesRepository.editarAtividade(pReq.body, id);
    return pRes.status(204).send();
  }

  async removerAtividade(pReq: Request, pRes: Response): Promise<any> {
    const { id } = pReq.params;
    await AtividadesRepository.removerAtividades(id);
    return pRes.status(204).send();
  }

  async buscaAtividadePorOrdemDeCriacao(
    pReq: Request,
    pRes: Response,
  ): Promise<any> {
    const { userId } = pReq.query;
    const columnName = 'createdAt';
    const orderBy = 'DESC';
    const atividades = await AtividadesRepository.buscarAtividadesPorOrdenacao(
      userId,
      columnName,
      orderBy,
    );
    return atividades.length > 0
      ? pRes.status(200).json(atividades)
      : pRes.status(204).send();
  }

  async buscaAtividadePorOrdemDeConclusao(
    pReq: Request,
    pRes: Response,
  ): Promise<any> {
    const { userId } = pReq.query;
    const columnName = 'dataConclusao';
    const orderBy = 'DESC';
    const atividades = await AtividadesRepository.buscarAtividadesPorOrdenacao(
      userId,
      columnName,
      orderBy,
    );
    return atividades.length > 0
      ? pRes.status(200).json(atividades)
      : pRes.status(204).send();
  }

  async buscaAtividadePorId(pReq: Request, pRes: Response): Promise<any> {
    const { id } = pReq.params;
    const atividades = await AtividadesRepository.buscarAtividadePorId(id);
    return atividades
      ? pRes.status(200).json(atividades)
      : pRes.status(204).send();
  }
}

export default new AtividadesController();
