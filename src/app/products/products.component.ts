import { AppError } from './../common/app-error';
import { ProductService, Product } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  result: Product[];
  nextPage: number;
  prevPage: number;
  currPage: number;
  maxPage: number;
  constructor(private service: ProductService) { }
  ngOnInit(): void {
    this.loadProducts(null)
  }
  loadProducts(perPage?: number, page?: number){
    this.service.getResourcePage(perPage,page)
      .subscribe(
        res => {
          console.log(res);
          this.result = res.items;
          this.currPage = res._meta.page;
          this.maxPage = res._meta.total_pages;
          this.nextPage = this.currPage + 1;
          this.prevPage = this.currPage - 1;
        },
        (error: AppError) => {
          if(error instanceof NotFoundError)
            alert('This product doesnt exist.');
          else{
            alert("An unexpected error occurred.");
            console.log(error);
          }
        }
      );
  }
  onNext(){
    this.loadProducts(null,this.nextPage);
  }
  onPrev(){
    this.loadProducts(null,this.prevPage);
  }
}
