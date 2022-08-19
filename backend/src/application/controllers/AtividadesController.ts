import { Request, Response } from 'express';
import atividadesUseCase from './useCases/atividadesUseCases';

class AtividadesController {
  async criarAtividade(pReq: Request, pRes: Response): Promise<any> {
    try {
      const { atividade, concluido, dataConclusao, userId } = pReq.body;
      if (!!userId === false) {
        throw new Error('Id do usuário não informado.');
      }
      const atividades = await atividadesUseCase.criarAtividade(
        atividade,
        concluido,
        dataConclusao,
        userId,
      );
      return pRes.status(201).send();
    } catch {
      return pRes.status(400).send();
    }
  }

  async editarAtividade(pReq: Request, pRes: Response): Promise<any> {
    try {
      const { id } = pReq.params;
      if (!!id === false) {
        throw new Error('Id de atividade não encontrado');
      }
      await atividadesUseCase.editarAtividade(pReq.body, id);
      return pRes.status(204).send();
    } catch {
      return pRes.status(400);
    }
  }

  async removerAtividade(pReq: Request, pRes: Response): Promise<any> {
    try {
      const { id } = pReq.params;
      await atividadesUseCase.removerAtividade(id);
      return pRes.status(204).send();
    } catch {
      return pRes.status(400);
    }
  }

  async buscaAtividadePorOrdemDeCriacao(
    pReq: Request,
    pRes: Response,
  ): Promise<any> {
    try {
      const { userId } = pReq.query;
      const columnName = 'createdAt';
      const orderBy = 'DESC';
      const atividades = await atividadesUseCase.buscarAtividadesPorOrdenacao(
        userId,
        columnName,
        orderBy,
      );
      if (atividades.length > 0) {
        return pRes.status(200).json(atividades);
      }
    } catch {
      return pRes.status(204).send();
    }
  }

  async buscaAtividadePorOrdemDeConclusao(
    pReq: Request,
    pRes: Response,
  ): Promise<any> {
    try {
      const { userId } = pReq.query;
      const columnName = 'dataConclusao';
      const orderBy = 'DESC';
      const atividades = await atividadesUseCase.buscarAtividadesPorOrdenacao(
        userId,
        columnName,
        orderBy,
      );
      if (atividades.length > 0) {
        return pRes.status(200).json(atividades);
      }
    } catch {
      return pRes.status(204).send();
    }
  }

  async buscaAtividadePorId(pReq: Request, pRes: Response): Promise<any> {
    try {
      const { id } = pReq.params;
      const atividades = await atividadesUseCase.buscarAtividadePorId(id);
      if (atividades) {
        pRes.status(200).json(atividades);
      }
    } catch {
      return pRes.status(204).send();
    }
  }
}

export default new AtividadesController();
