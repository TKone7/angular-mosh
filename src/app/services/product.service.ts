
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

export interface Product {
  barcode: string,
  name: string,
  description: string
}

@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService<Product> {

  constructor(http: HttpClient) { 
    super("http://lightread.ch:5000/api/products", http);
  }
  
}
