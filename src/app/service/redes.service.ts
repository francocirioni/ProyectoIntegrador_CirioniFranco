import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Redes } from '../model/redes';



@Injectable({
  providedIn: 'root'
})
export class RedesService {
  expURL = 'http://localhost:8080/redes/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Redes[]>{
    return this.httpClient.get<Redes[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Redes>{
    return this.httpClient.get<Redes>(this.expURL + `detail/${id}`);
  } 

  public save(redes: Redes): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', redes);
  }

  public update(id: number, redes: Redes): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, redes);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
