import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Global } from './global';
import { Cliente } from '../models/Cliente';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ClienteService {
  public URL_API: string;

  constructor(private http: HttpClient) {
    this.URL_API = Global.url;
  }

  testService(){
    return 'Testing Angular Service';
  }

  saveCliente(cliente: Cliente): Observable<any>{
    let params = JSON.stringify(cliente);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(this.URL_API + 'create-cliente', params, {
      headers: headers,
    });
  }

  getClientes(filter: any): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get(this.URL_API + 'clientes'+ filter , {headers: headers });

  }

  getCliente(idcliente: any): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json');

    return this.http.get(this.URL_API + 'cliente/' + idcliente, { headers: headers });
  }

  deleteCliente(idcliente: string): Observable<any> {
  let headers = new HttpHeaders().set('Content-Type', 'application/json');
    
  return this.http.delete(this.URL_API + 'cliente/' + idcliente, { headers: headers });
 }

  editCliente(cliente: any): Observable<any> {
    let params = JSON.stringify(cliente);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.put(this.URL_API + 'cliente/' + cliente.idcliente, params, {
    headers: headers,
    });
  }
  
}
