import {
  AtividadeCreate as AtividadeCreate,
  AtividadeUpdate,
  Update,
} from './../../atividade';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { Atividade } from '../../atividade';

@Injectable({
  providedIn: 'root',
})
export class TodolistService {
  private readonly API = 'http://localhost:3001/atividades/';

  constructor(private http: HttpClient) {}

  listar(userId: number) {
    return this.http
      .get<Atividade[]>(`${this.API}abertas?userId=${userId}`)
      .pipe();
  }

  listarConclusao(userId: number) {
    return this.http
      .get<Atividade[]>(`${this.API}concluidas?userId=${userId}`)
      .pipe();
  }

  listarId(id: number) {
    return this.http.get<Atividade>(`${this.API}${id}`).pipe(take(1));
  }

  create(atividade: AtividadeCreate) {
    return this.http
      .post<Atividade>(`${this.API}criar`, atividade)
      .pipe(take(1));
  }

  update(id: number, atividade: AtividadeUpdate) {
    return this.http
      .put<Atividade>(`${this.API}${id}`, atividade)
      .pipe(take(1));
  }

  update2(id: number, atividade: Update) {
    return this.http.put<Update>(`${this.API}${id}`, atividade).pipe(take(1));
  }

  remove(id: number) {
    return this.http.delete<Atividade[]>(`${this.API}${id}`).pipe(take(1));
  }
}
