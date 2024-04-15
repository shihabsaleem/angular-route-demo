import { Injectable } from '@angular/core';
import { Product } from '../latest/data';



@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  product: Product[] = [
    {
      id: 1,
      name: 'Iphone 15 Pro',
      price: 1299.99,
      image: '../../assets/1.jpeg',
    },
    {
      id: 2,
      name: 'Macbook Air M3',
      price: 1399.99,
      image: '../../assets/2.jpeg',
    },
    {
      id: 3,
      name: 'Apple Watch 9',
      price: 499.99,
      image: '../../assets/3.jpeg',
    },
    {
      id: 4,
      name: 'IPad Pro',
      price: 899.99,
      image: '../../assets/4.jpeg',
    },
  ];

  constructor() {}

  getProduct(): Product[] {
    return this.product;
  }
}
