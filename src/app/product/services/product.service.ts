import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { catchError, map, Observable, of } from 'rxjs';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/api/products`);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/api/products/create`, product);
  }

  updateProduct(product: Product): Observable<Product> {
    if (!product.id) throw Error('Producto requerido');
    return this.http.post<Product>(`${this.baseUrl}/api/products`, product);
  }

  deleteProductById(id: number): Observable<boolean> {
    return this.http.delete(`${this.baseUrl}/api/products/${id}`).pipe(
      catchError((err) => of(false)),
      map((resp) => true)
    );
  }
}
