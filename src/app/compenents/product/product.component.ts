import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  productList: any;
  slideIndex: number = 1;
  show: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    window.addEventListener('load', this.initslider);
    this.productService.getProduct().subscribe((res) => {
      this.productList = res;
      this.productList.forEach((a: any) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });
    });
  }
  nextBtn() {
    this.show = !this.show;
  }
  initslider() {
    const imageList = document.querySelector('.slider-wrapper .card-cont');
    const slideButton = document.querySelectorAll('.slider-wrapper .slide-btn');

    slideButton.forEach((res) => {
      res.addEventListener('click', () => {
        const direction = res.id === 'prev-slide' ? -1 : 1;
        if (imageList instanceof HTMLElement) {
          const scrollAmount = imageList.clientWidth * direction;
          if (imageList instanceof HTMLElement) {
            imageList.scrollBy({
              left: scrollAmount,
              behavior: 'smooth',
            });
          }
        }
      });
    });
  }
}
