import { Injectable } from '@angular/core';
import { Propietario } from '../interfaces/propietario.interface';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPropietario(): Observable<Propietario[]>{
    return this.http.get<Propietario[]>(`${this.baseUrl}/api/propietarios`)
  }

  getPageable(page: number): Observable<Propietario[]> {
    return this.http.get<Propietario[]>(`${this.baseUrl}/api/propietarios/page/${page}`);
  }

  addPropietario(propietario: Propietario): Observable<Propietario> {
    return this.http.post<Propietario>(`${this.baseUrl}/api/propietarios/create`, propietario);
  }

  updatePropietario(propietario: Propietario): Observable<Propietario> {
    if (!propietario.id) throw Error('propietario requerido');
    return this.http.post<Propietario>(`${this.baseUrl}/api/propietarios`, propietario);
  }

  deletePropietarioById(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/api/propietarios/${id}`).pipe(
      catchError((err) => of(false)),
      map((resp) => true)
    );
  }
}
