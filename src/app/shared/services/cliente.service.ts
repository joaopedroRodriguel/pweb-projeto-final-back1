import {Injectable} from '@angular/core';
import {Cliente} from '../model/cliente';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ClienteService{

  constructor(private httpClient: HttpClient) {
  }

  URL_CLIENTE = 'http://localhost:3000/clientes';
  URL_CLIENTE_GET = 'http://localhost:8080/api/listclientes';
  URL_CLIENTE_POST = 'http://localhost:8080/api/insertcliente';
  URL_CLIENTE_DELETE = 'http://localhost:8080/api/deletecliente';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };



  list(): Observable<Cliente[]> {
    return this.httpClient.get<Cliente[]>(`${this.URL_CLIENTE_GET}`);
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.httpClient.post<Cliente>(this.URL_CLIENTE_POST, cliente, this.httpOptions);
  }

  remover(id: string | number): Observable<object> {
    return this.httpClient.delete(`${this.URL_CLIENTE_DELETE}/${id}`);
  }

}
