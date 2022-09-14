import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ban } from '../model/ban';

@Injectable({
  providedIn: 'root'
})
export class BanService {

  URL = 'http://localhost:8080/ban/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Ban[]>{
    return this.httpClient.get<Ban[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Ban>{
    return this.httpClient.get<Ban>(this.URL + `detail/${id}`);
  }

  public save(ban: Ban): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', ban);
  }

  public update(id: number, ban: Ban): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, ban);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
