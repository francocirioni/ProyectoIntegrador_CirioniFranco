import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fotopro } from '../model/fotopro';

@Injectable({
  providedIn: 'root'
})
export class FotoproService {

  URL = 'http://localhost:8080/fotopro/';

  constructor(private httpClient : HttpClient) { }


  public lista(): Observable<Fotopro[]>{
    return this.httpClient.get<Fotopro[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Fotopro>{
    return this.httpClient.get<Fotopro>(this.URL + `detail/${id}`);
  }

  public save(fotopro: Fotopro): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', fotopro );
  }

  public update(id: number, fotopro: Fotopro): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, fotopro);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
