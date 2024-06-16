import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  public product: any = [];
  total: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.cartService.getProduct().subscribe((res) => {
      this.product = res;
      this.total = this.cartService.getTotalPrice();
    });
  }
  removeItem(item: any) {
    this.cartService.removeCartItemList(item);
  }
  emptyCart() {
    this.cartService.removeAllCart();
  }
}
