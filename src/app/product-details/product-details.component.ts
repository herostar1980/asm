import { DataService } from './../data.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { DataService } from '../data.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productList : Product[];
  product;

  constructor(private route: ActivatedRoute,
    private dataService: DataService) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('id'));
    const productList = this.dataService.getProducts().subscribe(data => this.productList = data);
    console.log(Object.values(productList));

  }

}
