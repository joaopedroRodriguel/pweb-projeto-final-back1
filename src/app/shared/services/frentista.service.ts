import { Injectable} from '@angular/core';
import {Frentista} from '../model/frentista';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class FrentistaService{

  URL_FRENTISTA = 'http://localhost:3000/frentistas';
  URL_FRENTISTA_GET = 'http://localhost:8080/api/listfrentistas';
  URL_FRENTISTA_DELETE = 'http://localhost:8080/api/deletefrentista';

  constructor(private httpClient: HttpClient) {
  }

  list(): Observable<Frentista[]> {
    return this.httpClient.get<Frentista[]>(`${this.URL_FRENTISTA_GET}`);
  }

  remover(id: string | number): Observable<object> {
    return this.httpClient.delete(`${this.URL_FRENTISTA_DELETE}/${id}`);
  }
}


