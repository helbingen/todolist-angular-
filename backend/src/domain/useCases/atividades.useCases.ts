import { Response } from 'express';

class AtividadesUseCase {
  verificaIdUndefined(pId: number, pRes: Response) {
    if (pId === undefined) {
      pRes.status(400).send;
    }
  }
  verificaTipoBoolean(pTipo: boolean, pRes: Response) {
    if (typeof pTipo !== 'boolean') {
      pRes.status(400).send;
    }
  }
}

export default new AtividadesUseCase();
