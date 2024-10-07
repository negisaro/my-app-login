import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'product-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  private fb = inject(FormBuilder);
  private vl = Validators;

  public productForm: FormGroup = this.fb.group({
    id: [0],
    sku: ['', [this.vl.required]],
    name: ['', [this.vl.required]],
    price: [
      0,
      [this.vl.required, this.vl.minLength(4), this.vl.pattern(/^[0-9]*$/)],
    ],
    description: ['', [this.vl.required]],
  });

  constructor(private productService: ProductService, private router: Router) {}

  get currentProduct(): Product {
    const product = this.productForm.value as Product;
    return product;
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes diligenciar todos los campos!',
      });
      return;
    }

    if (this.currentProduct.id) {
      this.productService.updateProduct(this.currentProduct).subscribe({
        next: () => {
          this.router.navigateByUrl('/dashboard/product/list-product'),
            Swal.fire({
              title: 'Actualizado producto!',
              text: 'Producto actualizado con exito!',
              icon: 'success',
            });
          return;
        },
      });
    }
    this.productService.addProduct(this.currentProduct).subscribe({
      next: () => {
        this.router.navigateByUrl('/dashboard/product/list-product'),
          Swal.fire({
            title: 'Nuevo producto!',
            text: 'Creado con exito!',
            icon: 'success',
          });
        (message: string) => {
          Swal.fire('Error', message, 'error');
          console.log(message);
        };
      },
    });
  }

  onReset(): void {
    this.productForm.reset();
  }
}
