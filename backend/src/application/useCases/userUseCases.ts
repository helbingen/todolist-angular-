import userRepository from '../../framework/sequelize/repositories/userRepository';

class userUseCase {
  async criarUsuario(
    pEmail: string,
    pSenha: string,
    pLogado: boolean,
  ): Promise<any> {
    const users = await userRepository.criarUsuario(pEmail, pSenha, pLogado);
    return users;
  }

  async selecionarUsuario(pEmail: string): Promise<any> {
    const users = await userRepository.selecionarUsuario(pEmail);
    return users;
  }

  async selecionarUsuarioLogado(): Promise<any> {
    const users = await userRepository.selecionarUsuarioLogado();
    return users;
  }

  async login(pBody: any, pEmail: string): Promise<any> {
    const users = await userRepository.login(pBody, pEmail);
    return users;
  }

  async atualizarUsuarioLogado(pBody: any): Promise<any> {
    const users = await userRepository.atualizarUsuarioLogado(pBody);
    return users;
  }
}

export default new userUseCase();
