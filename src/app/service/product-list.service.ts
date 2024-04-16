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
      thumb: '../../assets/1.jpeg',
      image: '../../assets/p1.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur eleifend ex, in consectetur leo eleifend vitae. In quis magna venenatis, porttitor mauris ut, faucibus orci. Vivamus hendrerit felis et quam malesuada, quis tristique nisi vehicula. Nam justo erat, auctor non orci in, consectetur cursus metus. Curabitur ornare egestas orci, sit amet ultrices mauris laoreet in. Sed ac egestas diam. Praesent sed euismod orci. Aliquam quis neque tempus, rhoncus neque eget, sagittis sapien. Nulla facilisi. Sed at ligula nibh. Aliquam iaculis risus sed ligula laoreet, a imperdiet magna tincidunt. Mauris rutrum ullamcorper risus a elementum. Suspendisse mattis vitae ligula sit amet placerat. Quisque semper tristique gravida. Nullam efficitur faucibus ultrices. Donec accumsan massa ligula, et varius neque venenatis at.',
    },
    {
      id: 2,
      name: 'Macbook Air M3',
      price: 1399.99,
      thumb: '../../assets/2.jpeg',
      image: '../../assets/p2.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur eleifend ex, in consectetur leo eleifend vitae. In quis magna venenatis, porttitor mauris ut, faucibus orci. Vivamus hendrerit felis et quam malesuada, quis tristique nisi vehicula. Nam justo erat, auctor non orci in, consectetur cursus metus. Curabitur ornare egestas orci, sit amet ultrices mauris laoreet in. Sed ac egestas diam. Praesent sed euismod orci. Aliquam quis neque tempus, rhoncus neque eget, sagittis sapien. Nulla facilisi. Sed at ligula nibh. Aliquam iaculis risus sed ligula laoreet, a imperdiet magna tincidunt. Mauris rutrum ullamcorper risus a elementum. Suspendisse mattis vitae ligula sit amet placerat. Quisque semper tristique gravida. Nullam efficitur faucibus ultrices. Donec accumsan massa ligula, et varius neque venenatis at.',
    },
    {
      id: 3,
      name: 'Apple Watch 9',
      price: 499.99,
      thumb: '../../assets/3.jpeg',
      image: '../../assets/p3.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur eleifend ex, in consectetur leo eleifend vitae. In quis magna venenatis, porttitor mauris ut, faucibus orci. Vivamus hendrerit felis et quam malesuada, quis tristique nisi vehicula. Nam justo erat, auctor non orci in, consectetur cursus metus. Curabitur ornare egestas orci, sit amet ultrices mauris laoreet in. Sed ac egestas diam. Praesent sed euismod orci. Aliquam quis neque tempus, rhoncus neque eget, sagittis sapien. Nulla facilisi. Sed at ligula nibh. Aliquam iaculis risus sed ligula laoreet, a imperdiet magna tincidunt. Mauris rutrum ullamcorper risus a elementum. Suspendisse mattis vitae ligula sit amet placerat. Quisque semper tristique gravida. Nullam efficitur faucibus ultrices. Donec accumsan massa ligula, et varius neque venenatis at.',
    },
    {
      id: 4,
      name: 'IPad Pro',
      price: 899.99,
      thumb: '../../assets/4.jpeg',
      image: '../../assets/p4.jpeg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur eleifend ex, in consectetur leo eleifend vitae. In quis magna venenatis, porttitor mauris ut, faucibus orci. Vivamus hendrerit felis et quam malesuada, quis tristique nisi vehicula. Nam justo erat, auctor non orci in, consectetur cursus metus. Curabitur ornare egestas orci, sit amet ultrices mauris laoreet in. Sed ac egestas diam. Praesent sed euismod orci. Aliquam quis neque tempus, rhoncus neque eget, sagittis sapien. Nulla facilisi. Sed at ligula nibh. Aliquam iaculis risus sed ligula laoreet, a imperdiet magna tincidunt. Mauris rutrum ullamcorper risus a elementum. Suspendisse mattis vitae ligula sit amet placerat. Quisque semper tristique gravida. Nullam efficitur faucibus ultrices. Donec accumsan massa ligula, et varius neque venenatis at.',
    },
  ];

  constructor() {}

  getProduct(): Product[] {
    return this.product;
  }
}
