import UserRepository from '../../../framework/sequelize/repositories/UserRepository';

class UserUseCase {
  criarUsuario(pEmail: string, pSenha: string, pLogado: boolean) {
    UserRepository.criarUsuario(pEmail, pSenha, pLogado);
  }

  selecionarUsuario(pEmail: any) {
    return UserRepository.selecionarUsuario(pEmail);
  }

  selecionarUsuarioLogado(): any {
    return UserRepository.selecionarUsuarioLogado();
  }

  login(pBody: any, pEmail: any): any {
    return UserRepository.login(pBody, pEmail);
  }

  atualizarUsuarioLogado(pBody: any): any {
    return UserRepository.atualizarUsuarioLogado(pBody);
  }
}

export default new UserUseCase();
