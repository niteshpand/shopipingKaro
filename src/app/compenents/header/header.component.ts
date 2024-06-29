import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

document.addEventListener('click', (event) => {
  const target = event.target as Element;
  const isDropdownButton = target.matches('[data-dropdown-button]');
  if (!isDropdownButton && target.closest('[data-dropdown]') !== null) return;

  let currentDropdown: Element | null;
  if (isDropdownButton) {
    currentDropdown = target.closest('[data-dropdown]');
    currentDropdown?.classList.toggle('active');
  }
  document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('active');
  });
});

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
