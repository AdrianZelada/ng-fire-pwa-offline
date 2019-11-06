import { Component, OnInit } from '@angular/core';
import {ProductsCollectionService} from './products-collection.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$: Observable<any>;

  constructor(private productsCollection: ProductsCollectionService) {
    this.products$ = this.productsCollection.get();
  }

  ngOnInit() {
  }

}
