import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { SharingDataService } from '../../services/sharing-data.service';

@Component({
  selector: 'product-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css',
})
export class ListProductComponent implements OnInit {
  products: Product[] = [];
  paginator: any = {};

  constructor(
    private productService: ProductService,
    private router: Router,
    private sharingData: SharingDataService
  ) {}

  ngOnInit(): void {
    this.pageProductEvent();
    this.productService
      .getProduct()
      .subscribe((products) => (this.products = products));
  }

  pageProductEvent() {
    this.sharingData.pageProductEventEmitter.subscribe((pageable) => {
      this.products = pageable.products;
      this.paginator = pageable.paginator;
    });
  }

  onDeleteProduct(id: number): void {
    Swal.fire({
      title: 'Seguro que quiere eliminar?',
      text: 'Cuidado el producto sera eliminado del sistema!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProductById(id).subscribe(() => {
          this.router
            .navigate(['/dashboard/product/list-product'], {
              skipLocationChange: true,
            })
            .then(() => {
              this.router.navigate(['/dashboard/product/list-product'], {
                state: {
                  products: this.products,
                  paginator: this.paginator,
                },
              });
            });
        });
        Swal.fire({
          title: 'Eliminado!',
          text: 'Producto eliminado con exito.',
          icon: 'success',
        });
      }
    });
  }
}
