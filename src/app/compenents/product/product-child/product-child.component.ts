import { Component, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-child',
  templateUrl: './product-child.component.html',
  styleUrls: ['./product-child.component.css'],
})
export class ProductChildComponent {
  @Input() productListItem: any[] = [];
  @Input() searchKey: string = '';
  constructor(private cartService: CartService) {}

  ngOnIt() {}

  addToCart(item: any) {
    this.cartService.addToCart(item);
  }
}
