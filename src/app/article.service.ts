import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = 'http://127.0.0.1:8082/api/article';
  private baseUrladd ='http://127.0.0.1:8082/api/addarticle';
  private baseUrldel ='http://127.0.0.1:8082/api/delete';
  private baseUrlupd ='http://127.0.0.1:8082/api/article/update';
  private baseUrlpanier ='http://127.0.0.1:8082/api/article/panier';
  private baseUrlSelected='http://127.0.0.1:8082/api/disponibilite/selected';

  constructor(private http: HttpClient) { }

  getarticle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createarticle(match: Object): Observable<Object> {
    return this.http.post(`${this.baseUrladd}`, match);
  }

  updatearticle(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrlupd}/${id}`, value);
  }
  ajouterpanier(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrlpanier}/${id}`, value);
  }

  deletearticle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrldel}/${id}`, { responseType: 'text' });
  }

  getarticleList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getselectedList(): Observable<any> {
    return this.http.get(`${this.baseUrlSelected}`);
  }
}
