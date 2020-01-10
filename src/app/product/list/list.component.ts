import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable, of } from 'rxjs';
import { IProduct, Product } from '../models/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private productservice:ProductService) { }
  products : Observable<IProduct[]> = null;
  ngOnInit() {
    this.products = this.productservice.getAllProducts();
  }


}
