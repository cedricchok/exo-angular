import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Cat} from '../models/Cat';
import {AppConfig, HOST} from '../../../config/app.config';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private http: HttpClient) { }

  private url: string = HOST.apiUrl;

  getAll(): Observable<Cat[]> {
    return this.http.get<Cat[]>(this.url);
  }

  getById(id: number): Observable<Cat> {
    return this.http.get<Cat>(this.url + '/' + id);
  }

  create(cat: Cat): Observable<Cat> {
    return this.http.post<Cat>(this.url, cat);
  }

  update(cat: Cat): Observable<Cat> {
    return this.http.patch<Cat>(this.url, cat);
  }

  delete(id: number): Promise<any> {
    return fetch(this.url + '/' + id, {
      method: 'DELETE'
    });
  }
}
