import { Request, Response } from 'express';
import userUseCases from '../useCases/userUseCases';
import criptografarSenha from '../../framework/utils/criptografarSenha';

class userController {
  async validarSenhaFrontend(pReq: Request, pRes: Response): Promise<any> {
    try {
      const { senha } = pReq.body;
      const hash = criptografarSenha.criptografarSenha(senha);
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
    } catch (error) {
      throw new Error(error);
    }
  }

  async selecionarUsuario(pReq: Request, pRes: Response): Promise<any> {
    try {
      const { email } = pReq.query;
      const emailString = String(email);

      const user = await userUseCases.selecionarUsuario(emailString);
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
      if (!!user === false) {
        //validação de valor falsify, mesma coisa de user === null
        return pRes.status(404).send('Não existe usuário logado');
      }
      return pRes.status(200).json(user);
    } catch {
      return pRes.status(404).send();
    }
  }

  async login(pReq: Request, pRes: Response): Promise<any> {
    try {
      const { email } = pReq.query;
      const emailString = String(email);
      await userUseCases.login(pReq.body, emailString);
      return pRes.status(204).send();
    } catch {
      throw new Error('Não foi possível realizar login');
    }
  }

  async atualizarUsuarioLogado(pReq: Request, pRes: Response): Promise<any> {
    try {
      const users = await userUseCases.atualizarUsuarioLogado(pReq.body);
      return pRes.status(204).json(users);
    } catch {
      return pRes.status(404).send();
    }
  }
}

export default new userController();
