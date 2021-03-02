import { DataService } from './data.service';
import { Product } from './product.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
products$ : Product[];

constructor(private dataService: DataService){}

ngOnInit() {
  return this.dataService.getProducts().subscribe(data => this.products$ = data);
}

}
