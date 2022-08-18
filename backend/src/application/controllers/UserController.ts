import { Request, Response } from 'express';
import UserRepository from '../../framework/sequelize/repositories/UserRepository';
import CriptografarSenha from '../../framework/utils/criptografarSenha';

class UserController {
  async validarSenhaFrontend(pReq: Request, pRes: Response): Promise<any> {
    const { senha } = pReq.body;
    const hash = CriptografarSenha.criptografarSenha(senha);
    return pRes.status(201).json(hash);
  }

  async criarUsuario(pReq: Request, pRes: Response): Promise<any> {
    const { email, senha, logado } = pReq.body;

    const user = await UserRepository.criarUsuario(email, senha, logado);
    return pRes.status(201).json(user);
  }

  async selecionarUsuario(pReq: Request, pRes: Response): Promise<any> {
    const { email } = pReq.query;
    const user = await UserRepository.selecionarUsuario(email);
    return user ? pRes.status(200).json(user) : pRes.status(404).send();
  }

  async selecionarUsuarioLogado(pReq: Request, pRes: Response): Promise<any> {
    const user = await UserRepository.selecionarUsuarioLogado();
    return user ? pRes.status(200).json(user) : pRes.status(404).send();
  }

  async login(pReq: Request, pRes: Response): Promise<any> {
    const { email } = pReq.query;
    await UserRepository.login(pReq.body, email);
    return pRes.status(204).send();
    // return logado ? pRes.status(200).json({ logado }) : pRes.status(404);
  }

  async atualizarUsuarioLogado(pReq: Request, pRes: Response): Promise<any> {
    await UserRepository.atualizarUsuarioLogado(pReq.body);
    return pRes.status(204).send();
    // return logado ? pRes.status(200).json(logado) : pRes.status(404);
  }
}

export default new UserController();
