import { Request, Response } from "express";
import { ListModel } from "../database/models/ListModel";

class ListController {
  async create(req: Request, res: Response) {
    const { atividade, concluido, dataConclusao, userId } = req.body;
    const list = await ListModel.create({
      atividade,
      concluido,
      dataConclusao,
      userId,
    });
    return res.status(201).json(list);
  }

  async update(req: Request, res: Response) {
    const { id } = req.params;
    await ListModel.update(req.body, { where: { id } });
    return res.status(204).send();
  }

  async delete(req: Request, res: Response) {
    const { id } = req.params;
    await ListModel.destroy({ where: { id } });
    return res.status(204).send();
  }

  async select(req: Request, res: Response) {
    const { userId } = req.query;
    const list = await ListModel.findAll({
      order: [["createdAt", "DESC"]],
      where: { userId },
    });
    return list.length > 0
      ? res.status(200).json(list)
      : res.status(204).send();
  }

  async selectConclusao(req: Request, res: Response) {
    const { userId } = req.query;
    console.log(userId);
    const list = await ListModel.findAll({
      order: [["dataConclusao", "DESC"]],
      where: { userId },
    });
    return list.length > 0
      ? res.status(200).json(list)
      : res.status(204).send();
  }

  async selectOne(req: Request, res: Response) {
    const { id } = req.params;
    const list = await ListModel.findOne({
      where: {
        id,
      },
    });
    return list ? res.status(200).json(list) : res.status(204).send();
  }
}

export default new ListController();
