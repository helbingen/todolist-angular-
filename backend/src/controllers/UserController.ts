import { Request, Response } from "express";
import { UserModel } from "../database/models/UserModel";
const crypto = require("crypto");

function criptografar(senha: string) {
  const secret = "Hi";
  const hash = crypto.createHash("sha256", secret).update(senha).digest("hex");
  return hash;
}
class UserController {
  async validarSenhaFrontend(req: Request, res: Response) {
    const { senha } = req.body;
    console.log(typeof senha);
    const secret = "Hi";
    const hash = crypto
      .createHash("sha256", secret)
      .update(senha)
      .digest("hex");
    return res.status(201).json(hash);
  }

  async create(req: Request, res: Response) {
    const { email, senha, logado } = req.body;

    const user = await UserModel.create({
      email,
      senha: criptografar(senha),
      logado,
    });
    return res.status(201).json(user);
  }

  async select(req: Request, res: Response) {
    const { email } = req.query;
    const user = await UserModel.findOne({
      where: { email },
    });
    return user ? res.status(200).json(user) : res.status(404).send();
  }

  async selectUsuarioLogado(req: Request, res: Response) {
    const user = await UserModel.findOne({
      where: { logado: true },
    });
    return user ? res.status(200).json(user) : res.status(404).send();
  }

  async login(req: Request, res: Response) {
    const { email } = req.query;
    const { logado } = req.body;
    await UserModel.update(req.body, { where: { email } });
    return logado ? res.status(200).json({ logado }) : res.status(404);
  }

  async updateUserLogado(req: Request, res: Response) {
    const { logado } = req.body;
    await UserModel.update(req.body, { where: { logado: true } });
    return logado ? res.status(200).json(logado) : res.status(404);
  }
}

export default new UserController();
