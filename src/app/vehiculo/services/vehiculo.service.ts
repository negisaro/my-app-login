import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { HttpClient } from '@angular/common/http';
import { Vehiculo } from '../interfaces/vehiculo.interface';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {

  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPVehiculo(): Observable<Vehiculo[]>{
    return this.http.get<Vehiculo[]>(`${this.baseUrl}/api/vehiculos`)
  }

  addVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(`${this.baseUrl}/api/vehiculos/register`, vehiculo);
  }

  updateVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    if (!vehiculo.id) throw Error('vehiculo requerido');
    return this.http.post<Vehiculo>(`${this.baseUrl}/api/vehiculos`, vehiculo);
  }

  deleteVehiculoById(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/api/vehiculos/${id}`).pipe(
      catchError((err) => of(false)),
      map((resp) => true)
    );
  }
}
