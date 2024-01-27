import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-list-item',
  templateUrl: './product-list-item.component.html',
  styleUrls: ['./product-list-item.component.scss']
})
export class ProductListItemComponent implements OnInit {
  products: any = [];
  isLoading = false;

  constructor(
    private productsService: ProductsService,
  ) { }


  ngOnInit(): void {
    this.onFetchProduct();
  }

  onFetchProduct() {
    this.isLoading = true;
    this.productsService.getProducts().subscribe(response => {
      this.isLoading = false;
      this.products = response;
    })
  }

}
