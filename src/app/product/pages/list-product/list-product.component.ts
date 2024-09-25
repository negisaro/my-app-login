import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {
  public products: Product [] = [];
  constructor(private productService: ProductService){}
  ngOnInit(): void {
    this.productService.getProduct().subscribe(products => this.products = products)
  }
}
