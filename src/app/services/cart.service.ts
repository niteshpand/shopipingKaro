import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cartItems: any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() {}
  getProduct() {
    return this.productList.asObservable();
  }

  setProduct(product: any) {
    this.cartItems.push(...product);
    this.productList.next(product);
  }

  addToCart(product: any) {
    this.cartItems.push(product);
    this.productList.next(this.cartItems);
    this.getTotalPrice();
  }

  getTotalPrice(): number {
    let totalAmount = 0;
    this.cartItems.map((a: any) => {
      totalAmount += a.total;
    });
    return totalAmount;
  }
  removeCartItemList(product: any) {
    this.cartItems.map((a: any, i: any) => {
      if (product.id === a.id) {
        this.cartItems.splice(i, 1);
      }
    });
  }

  removeAllCart() {
    this.cartItems = [];
    this.productList.next(this.cartItems);
  }
}
