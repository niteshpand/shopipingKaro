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
    this.productService.getProduct().subscribe((res) => {
      this.productList = res;
    });
  }

  // showDivs(slideIndex:number){};

  plusDivs(n: number) {
    this.showDivs((this.slideIndex += n));
  }

  showDivs(n: number) {
    let i;
    const x = document.getElementsByClassName(
      'card-cont'
    ) as HTMLCollectionOf<HTMLElement>;
    if (n > x.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    x[this.slideIndex - 1].style.display = 'block';
  }
}
