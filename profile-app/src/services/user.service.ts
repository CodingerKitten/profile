import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = environment.api;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<{token : string}> {
    return this.http.post<{token : string}>(`${this.api}/users/login`, { email, password });
  }

  register(name: string, email: string, password: string): Observable<any>{
    return this.http.post(`${this.api}/users/register`, { name, email, password });
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.api}/users/profile`,{
      headers: {
        Authorization: `Bearer ${localStorage.getItem('authToken')}`
      }
    });
  }
}
