import { Request, Response } from 'express';
import atividadesUseCases from '../useCases/atividadesUseCases';

class atividadesController {
  async criarAtividade(pReq: Request, pRes: Response): Promise<any> {
    try {
      const { atividade, userId } = pReq.body;
      if (!!userId === false) {
        throw new Error('Id do usuário não informado.');
      }
      const atividades = await atividadesUseCases.criarAtividade(
        atividade,
        userId,
      );
      return pRes.status(201).json(atividades);
    } catch {
      return pRes.status(400).send();
    }
  }

  async editarAtividade(pReq: Request, pRes: Response): Promise<any> {
    try {
      const { id } = pReq.params;
      const idNumber = Number(id);
      if (!!id === false) {
        throw new Error('Id de atividade não encontrado');
      }
      await atividadesUseCases.editarAtividade(pReq.body, idNumber);
      return pRes.status(204).send();
    } catch {
      return pRes.status(400);
    }
  }

  async removerAtividade(pReq: Request, pRes: Response): Promise<any> {
    try {
      const { id } = pReq.params;
      const idNumber = Number(id);
      await atividadesUseCases.removerAtividade(idNumber);
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
      const userIdNumber = Number(userId);
      const columnName = 'createdAt';
      const orderBy = 'DESC';
      const atividades = await atividadesUseCases.buscarAtividadesPorOrdenacao(
        userIdNumber,
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
      const userIdNumber = Number(userId);
      const columnName = 'dataConclusao';
      const orderBy = 'DESC';
      const atividades = await atividadesUseCases.buscarAtividadesPorOrdenacao(
        userIdNumber,
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
      const idNumber = Number(id);
      const atividades = await atividadesUseCases.buscarAtividadePorId(
        idNumber,
      );
      if (atividades) {
        return pRes.status(200).json(atividades);
      }
    } catch {
      return pRes.status(204).send();
    }
  }
}

export default new atividadesController();
