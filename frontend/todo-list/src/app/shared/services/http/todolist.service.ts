import {
  IAtividadeCreate as AtividadeCreate,
  IAtividadeUpdate,
  IUpdate,
} from '../../models/interfaces/atividade';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, Observable } from 'rxjs';
import { IAtividade } from '../../models/interfaces/atividade';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  constructor(private http: HttpClient) {}

  listarAtividadesAbertas(pUserId: number): Observable<IAtividade[]> {
    return this.http
      .get<IAtividade[]>(
        `${environment.API_URL}atividades/abertas?userId=${pUserId}`
      )
      .pipe();
  }

  listarAtividadesConcluidas(pUserId: number): Observable<IAtividade[]> {
    return this.http
      .get<IAtividade[]>(
        `${environment.API_URL}atividades/concluidas?userId=${pUserId}`
      )
      .pipe();
  }

  listarId(pId: number): Observable<IAtividade> {
    return this.http
      .get<IAtividade>(`${environment.API_URL}atividades/${pId}`)
      .pipe(take(1));
  }

  create(pAtividade: AtividadeCreate): Observable<IAtividade> {
    return this.http
      .post<IAtividade>(`${environment.API_URL}atividades/criar`, pAtividade)
      .pipe(take(1));
  }

  concluirAtividade(
    pId: number,
    pAtividade: IAtividadeUpdate
  ): Observable<IAtividade> {
    return this.http
      .put<IAtividade>(`${environment.API_URL}atividades/${pId}`, pAtividade)
      .pipe(take(1));
  }

  editarAtividade(pId: number, pAtividade: IUpdate): Observable<IUpdate> {
    return this.http
      .put<IUpdate>(`${environment.API_URL}atividades/${pId}`, pAtividade)
      .pipe(take(1));
  }

  remove(pId: number): Observable<IAtividade[]> {
    return this.http
      .delete<IAtividade[]>(`${environment.API_URL}atividades/${pId}`)
      .pipe(take(1));
  }
}
