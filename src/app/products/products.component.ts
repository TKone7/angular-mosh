import { AppError } from './../common/app-error';
import { ProductService, Product } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from '../common/not-found-error';
import { combineLatest } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  result: Product[];
  currPage: number;
  perPage: number;
  maxPage: number;

  constructor(
    private service: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(
        switchMap(query => {
          this.perPage = +query.get('per_page');
          this.currPage = +query.get('page');
          return this.service.getResourcePage(this.perPage, this.currPage);
        })
      )
    .subscribe(resource => {
      this.result = resource.items;
      this.maxPage = resource._meta.total_pages;
      this.perPage = resource._meta.per_page;
      this.currPage = resource._meta.page;
    },
    (error: AppError) => {
      if(error instanceof NotFoundError)
        alert('This product doesnt exist.');
      else{
        throw error;
      }
    });
  }
  
  onNext(){
    this.router.navigate(['/products'], {
      queryParams: {per_page: this.perPage, page: this.currPage +1}
    });
  }
  onPrev(){
    this.router.navigate(['/products'], {
      queryParams: {per_page: this.perPage, page: this.currPage -1}
    });  
  }
  onResultsChange(){
    this.router.navigate(['/products'], {
      queryParams: {per_page: this.perPage, page: 1}
    });  }
}
