import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fotoa } from '../model/fotoa';

@Injectable({
  providedIn: 'root'
})
export class FotoaService {

  URL = 'https://mibackhereku.herokuapp.com/fotoa/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Fotoa[]>{
    return this.httpClient.get<Fotoa[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Fotoa>{
    return this.httpClient.get<Fotoa>(this.URL + `detail/${id}`);
  }

  public save(fotoa: Fotoa): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', fotoa);
  }

  public update(id: number, fotoa: Fotoa): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, fotoa);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
