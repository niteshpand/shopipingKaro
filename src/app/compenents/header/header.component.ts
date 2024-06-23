import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  totalItem: number = 0;
  public searchTerm: string = '';
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getProduct().subscribe((res) => {
      this.totalItem = res.length;
    });
  }
  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    this.cartService.search.next(this.searchTerm);
  }
}
