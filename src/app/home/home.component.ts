import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products$ : Product[];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    return this.dataService.getProducts().subscribe(data => this.products$ = data);
  }
  }

