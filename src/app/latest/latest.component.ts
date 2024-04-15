import { Component, Input } from '@angular/core';
import { ProductListService } from '../service/product-list.service';
import { Product } from './data';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent {
  @Input() products: Product[] = [];

  constructor(private productService: ProductListService) {}

  ngOnInit(): void {
    this.products = this.productService.getProduct();
  }
  title = 'hai';
}
