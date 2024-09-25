import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/api/users`)
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/api/users/register`, user);
  }

  updateUser(user: User): Observable<User> {
    if (!user.id) throw Error('Usuario requerido');
    return this.http.post<User>(`${this.baseUrl}/api/users`, user);
  }

  deleteProductById(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/api/users/${id}`).pipe(
      catchError((err) => of(false)),
      map((resp) => true)
    );
  }
}
