import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  constructor(private http: HttpClient) {}

  getAllClients(): Observable<any> {
    return this.http.get<any>('http://192.168.40.127:3001/clients');
  }
}
