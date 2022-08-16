import { IAtividade } from '../../models/interfaces/atividade';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUsuario, IUsuarioLogado } from '../../models/interfaces/usuario';
import { take, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  usuario!: IUsuario[];
  header = {
    'Content-Type': 'application/json',
  };

  constructor(private http: HttpClient) {}

  criarLogin(pUsuario: IUsuario): Observable<IUsuario> {
    return this.http
      .post<IUsuario>(`${environment.API_URL}login/create-user`, pUsuario, {
        headers: this.header,
      })
      .pipe(take(1));
  }

  // login(usuario: IUsuario): Observable<Object> {
  //   return this.http
  //     .put(`${environment.API_URL}login`, usuario, { headers: this.header })
  //     .pipe(take(1));
  // }

  loginExiste(pUsuario: IUsuario) {
    return this.http
      .get(`${environment.API_URL}login?email=${pUsuario.email}`)
      .pipe(take(1));
  }

  validacaoSenhaCrypto(pSenha: string) {
    return this.http
      .put(
        `${environment.API_URL}login-validate`,
        { senha: pSenha },
        { headers: this.header }
      )
      .pipe(take(1));
  }

  login(pEmail: string, pUsuario: IUsuarioLogado): Observable<IAtividade> {
    return this.http
      .put<IAtividade>(
        `${environment.API_URL}login?email=${pEmail}`,
        pUsuario,
        {
          headers: this.header,
        }
      )
      .pipe(take(1));
  }

  logout(pUsuario: IUsuarioLogado): Observable<IUsuarioLogado> {
    return this.http
      .put<IUsuarioLogado>(`${environment.API_URL}logout`, pUsuario, {
        headers: this.header,
      })
      .pipe(take(1));
  }

  selectUsuarioLogado(): Observable<Object> {
    return this.http
      .get(`${environment.API_URL}logged-in?logado=true`)
      .pipe(take(1));
  }
}
