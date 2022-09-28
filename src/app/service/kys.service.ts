import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kys } from '../model/kys';

@Injectable({
  providedIn: 'root'
})
export class KysService {

  URL = 'https://mibackhereku.herokuapp.com/kys/';

  constructor(private httpClient : HttpClient) { }


  public lista(): Observable<Kys[]>{
    return this.httpClient.get<Kys[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Kys>{
    return this.httpClient.get<Kys>(this.URL + `detail/${id}`);
  }

  public save(kys: Kys): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', kys);
  }

  public update(id: number, kys: Kys): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, kys);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }



}
