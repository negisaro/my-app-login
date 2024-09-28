import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  public productForm = new FormGroup({
    id: new FormControl(0),
    sku: new FormControl(''),
    name: new FormControl<string>('', { nonNullable: true }),
    price: new FormControl(0),
    description: new FormControl(''),
  });

  constructor(private productService: ProductService, private router: Router) {}

  get currentProduct(): Product {
    const product = this.productForm.value as Product;
    return product;
  }

  onSubmit(): void {
    if (this.productForm.invalid) return;

    if (this.currentProduct.id) {
      this.productService.updateProduct(this.currentProduct).subscribe({
        next: (product) => {
          this.router.navigate(['/dashboard/product/list-product']);
        },
      });
      Swal.fire({
        title: 'Actualizado producto!',
        text: 'Producto actualizado con exito!',
        icon: 'success',
      });
      return;
    }
    this.productService.addProduct(this.currentProduct).subscribe({
      next: (product) => {
        console.log(product);
        this.router.navigate(['/dashboard/product/list-product']);
      },
    });
    Swal.fire({
      title: 'Creado nuevo producto!',
      text: 'Producto creado con exito!',
      icon: 'success',
    });
  }
}
