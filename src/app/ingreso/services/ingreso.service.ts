import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Ingreso } from '../interfaces/ingreso.interface';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngresoService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  lisIngreso(): Observable<Ingreso[]> {
    return this.http.get<Ingreso[]>(`${this.baseUrl}/api/ingresos`);
  }

  addIngreso(ingreso: Ingreso): Observable<Ingreso> {
    return this.http.post<Ingreso>(`${this.baseUrl}/api/ingresos/create`, ingreso);
  }

  updateIngreso(ingreso: Ingreso): Observable<Ingreso> {
    if (!ingreso.id) throw Error('ingreso requerido');
    return this.http.post<Ingreso>(`${this.baseUrl}/api/ingresos`, ingreso);
  }

  deleteIngresoById(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/api/ingresos/${id}`).pipe(
      catchError((err) => of(false)),
      map((resp) => true)
    );
  }
}
