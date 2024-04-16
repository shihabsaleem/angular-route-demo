import { Component, Input } from '@angular/core';
import { Product } from '../latest/data';
import { ProductListService } from '../service/product-list.service';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.scss'],
})
export class ProductDescComponent {
  @Input() products: Product[] = [];

  constructor(private productService: ProductListService) {}

  ngOnInit(): void {
    this.products = this.productService.getProduct();
  }
}
