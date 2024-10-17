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

  findById(id: number): Observable<Vehiculo> {
    return this.http.get<Vehiculo>(`${this.baseUrl}/api/vehiculos/${id}`);
  }

  addVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(`${this.baseUrl}/api/vehiculos/create`, vehiculo);
  }

  updateVehiculo(vehiculo: Vehiculo): Observable<Vehiculo> {    
    return this.http.put<Vehiculo>(`${this.baseUrl}/api/vehiculos/${vehiculo.id}`, vehiculo);
  }

  deleteVehiculoById(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/api/vehiculos/${id}`).pipe(
      catchError((err) => of(false)),
      map((resp) => true)
    );
  }
}
