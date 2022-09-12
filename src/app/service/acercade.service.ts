import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acercade } from '../model/acercade';

@Injectable({
  providedIn: 'root'
})
export class AcercadeService {

  URL = 'http://localhost:8080/acercade/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Acercade []>{
    return this.httpClient.get<Acercade []>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Acercade >{
    return this.httpClient.get<Acercade >(this.URL + `detail/${id}`);
  }

  public save(proyectos: Acercade ): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', proyectos);
  }

  public update(id: number, proyectos: Acercade ): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, proyectos);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
