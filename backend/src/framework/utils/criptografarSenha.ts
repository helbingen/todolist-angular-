const crypto = require('crypto');

class CriptografarSenha {
  criptografarSenha(pSenha: string): string {
    const secret = 'Hi';
    var hash = crypto.createHash('sha256', secret).update(pSenha).digest('hex');
    return hash;
  }
}

export default new CriptografarSenha();
