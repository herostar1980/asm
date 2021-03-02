import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl = 'https://my-json-server.typicode.com/herostar1980/data/product';
  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get<Product[]>(this.apiUrl);
  }
}
