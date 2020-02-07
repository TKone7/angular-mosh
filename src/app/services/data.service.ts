import { BadInputError } from '../common/bad-input-error';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

export interface Resources<T> {
    items: [ T ],
    _links: {
        next: string,
        prev: string,
        self: string
    },
    _meta: {
        page: number,
        per_page: number,
        total_items: number,
        total_pages: number
    }
}

@Injectable({
  providedIn: 'root'
})
export class DataService<T> {
  constructor(protected url: string, private http: HttpClient) { }
  
  private handleError(error: HttpErrorResponse) {
    if (error.status === 404)
      return throwError( new NotFoundError() );
    if (error.status === 400)
      return throwError( new BadInputError() );
    return throwError( new AppError(error) );
  }

  getResourcePage(perPage?: number, page?: number) {
    let tempUrl = this.url;
    if(page || perPage){
        tempUrl += "?";
      if (page) tempUrl += "page=" + page + "&";
      if (perPage) tempUrl += "per_page=" + perPage + "&"
      tempUrl = tempUrl.substr(0,tempUrl.length-1);
    }
    return this.http.get<Resources<T>>(tempUrl).pipe(
      catchError(this.handleError)
    ); // get full response not just body { observe: 'response' }
  }

  getAll() {
    return this.http.get<[T]>(this.url).pipe(
      catchError(this.handleError)
    ); // get full response not just body { observe: 'response' }
  }

  

  get(id) {
    return this.http.get<T>(this.url+"/"+id).pipe( 
      catchError(this.handleError)
    ); // get full response not just body { observe: 'response' }
  }
  create(resource){
    return this.http.post<T>(this.url, JSON.stringify(resource)).pipe( 
      catchError(this.handleError)
    );
  }
  update(resource){
    return this.http.put<T>(this.url + '/' + resource.id, JSON.stringify(resource)).pipe( 
      catchError(this.handleError)
    );
    //this.http.put(this.url, JSON.stringify(resource));
  }

  delete(id){
    return this.http.delete(this.url+"/"+id).pipe( 
      catchError(this.handleError), retry(3)
    );
  }
}
