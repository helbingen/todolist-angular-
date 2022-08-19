import { Request, Response } from 'express';
import userUseCases from './useCases/userUseCases';
import CriptografarSenha from '../../framework/utils/criptografarSenha';

class UserController {
  async validarSenhaFrontend(pReq: Request, pRes: Response): Promise<any> {
    try {
      const { senha } = pReq.body;
      const hash = CriptografarSenha.criptografarSenha(senha);
      return pRes.status(201).json(hash);
    } catch {
      throw new Error('Senha não criptografada');
    }
  }

  async criarUsuario(pReq: Request, pRes: Response): Promise<any> {
    try {
      const { email, senha, logado } = pReq.body;

      const user = await userUseCases.criarUsuario(email, senha, logado);
      return pRes.status(201).json(user);
    } catch {
      throw new Error('Usuário não foi criado');
    }
  }

  async selecionarUsuario(pReq: Request, pRes: Response): Promise<any> {
    try {
      const { email } = pReq.query;
      const user = await userUseCases.selecionarUsuario(email);
      if (!!user === false) {
        throw new Error('Email não encontrado');
      }

      if (user) {
        return pRes.status(200).json(user);
      }
    } catch {
      return pRes.status(404).send();
    }
  }

  async selecionarUsuarioLogado(pReq: Request, pRes: Response): Promise<any> {
    try {
      const user = await userUseCases.selecionarUsuarioLogado();
      if (user) {
        return pRes.status(200).json(user);
      }
    } catch {
      return pRes.status(404).send();
    }
  }

  async login(pReq: Request, pRes: Response): Promise<any> {
    try {
      const { email } = pReq.query;
      await userUseCases.login(pReq.body, email);
      return pRes.status(204).send();
    } catch {
      throw new Error('Não foi possível realizar login');
    }
    // return logado ? pRes.status(200).json({ logado }) : pRes.status(404);
  }

  async atualizarUsuarioLogado(pReq: Request, pRes: Response): Promise<any> {
    try {
      await userUseCases.atualizarUsuarioLogado(pReq.body);
      return pRes.status(204).send();
    } catch {
      return pRes.status(404).send();
    }
    // return logado ? pRes.status(200).json(logado) : pRes.status(404);
  }
}

export default new UserController();
