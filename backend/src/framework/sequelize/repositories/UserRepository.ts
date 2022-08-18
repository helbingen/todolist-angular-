import { Model } from 'sequelize/types';
import { UserModel } from '../models/UserModel';
import CriptografarSenha from '../../utils/criptografarSenha';

class UserRepository {
  criarUsuario(pEmail: string, pSenha: string, pLogado: boolean): void {
    UserModel.create({
      email: pEmail,
      senha: CriptografarSenha.criptografarSenha(pSenha),
      logado: pLogado,
    });
  }

  selecionarUsuario(pEmail: any): any {
    let user = UserModel.findOne({
      where: { email: pEmail },
    });
    return user;
  }

  selecionarUsuarioLogado(): any {
    let user = UserModel.findOne({
      where: { logado: true },
    });
    return user;
  }

  login(pBody: any, pEmail: any): any {
    let logado = UserModel.update(pBody, { where: { email: pEmail } });
    return logado;
  }

  atualizarUsuarioLogado(pBody: any): any {
    let user = UserModel.update(pBody, { where: { logado: true } });
    return user;
  }
}

export default new UserRepository();
