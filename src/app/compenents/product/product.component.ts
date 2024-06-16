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

  constructor(private productService: ProductService) {}

  ngOnInit() {
    window.addEventListener('load', this.initslider);
    this.productService.getProduct().subscribe((res) => {
      this.productList = res;
    });
  }
  initslider() {
    const imageList = document.querySelector('.slider-wrapper .card-cont');
    const slideButton = document.querySelectorAll('.slider-wrapper .slide-btn');

    //Slide images according to the slide button clicks
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
