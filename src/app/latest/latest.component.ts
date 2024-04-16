import { Component, Input } from '@angular/core';
import { ProductListService } from '../service/product-list.service';
import { Product } from './data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrls: ['./latest.component.scss'],
})
export class LatestComponent {
  @Input() products: Product[] = [];

  constructor(
    private productService: ProductListService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.products = this.productService.getProduct();
  }
  gotoProduct(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
