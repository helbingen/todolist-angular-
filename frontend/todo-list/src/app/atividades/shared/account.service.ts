import { Atividade } from './../../atividade';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario, UsuarioLogado } from 'src/app/usuario';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  usuario!: Usuario[];
  private readonly API_URL = 'http://localhost:3001/';
  header = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  };

  constructor(private http: HttpClient) {}

  criarLogin(usuario: Usuario) {
    return this.http
      .post<Usuario>(`${this.API_URL}login/create-user`, usuario, {
        headers: this.header,
      })
      .pipe(take(1));
  }

  entrar(usuario: Usuario) {
    return this.http
      .put(`${this.API_URL}login`, usuario, { headers: this.header })
      .pipe(take(1));
  }

  loginExiste(usuario: Usuario) {
    return this.http
      .get(`${this.API_URL}login?email=${usuario.email}`)
      .pipe(take(1));
  }

  validacaoSenhaCrypto(senha: string) {
    return this.http
      .put<string>(
        `${this.API_URL}login-validate`,
        { senha },
        { headers: this.header }
      )
      .pipe(take(1));
  }

  usuarioLogado(email: string, usuario: UsuarioLogado) {
    return this.http
      .put<Atividade>(`${this.API_URL}login?email=${email}`, usuario, {
        headers: this.header,
      })
      .pipe(take(1));
  }

  updateUserLogado(usuario: UsuarioLogado) {
    return this.http
      .put<UsuarioLogado>(`${this.API_URL}logout`, usuario, {
        headers: this.header,
      })
      .pipe(take(1));
  }

  selectUsuarioLogado() {
    return this.http.get(`${this.API_URL}logged-in?logado=true`).pipe(take(1));
  }
}
