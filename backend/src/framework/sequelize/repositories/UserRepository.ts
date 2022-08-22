import { userModel } from '../models/userModel';
import criptografarSenha from '../../utils/criptografarSenha';

class userRepository {
  async criarUsuario(
    pEmail: string,
    pSenha: string,
    pLogado: boolean,
  ): Promise<any> {
    const users = await userModel.create({
      email: pEmail,
      senha: criptografarSenha.criptografarSenha(pSenha),
      logado: pLogado,
    });
    return users;
  }

  async selecionarUsuario(pEmail: string): Promise<any> {
    const users = await userModel.findOne({
      where: { email: pEmail },
    });
    return users;
  }

  async selecionarUsuarioLogado(): Promise<any> {
    const users = await userModel.findOne({
      where: { logado: true },
    });
    return users;
  }

  async login(pBody: any, pEmail: string): Promise<any> {
    const logado = await userModel.update(pBody, { where: { email: pEmail } });
    return logado;
  }

  async atualizarUsuarioLogado(pBody: any): Promise<any> {
    const [qtdRegistro, registro] = await userModel.update(pBody, {
      where: { logado: true },
      returning: true,
    });
    return registro;
  }
}

export default new userRepository();
