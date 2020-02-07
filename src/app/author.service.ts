import { Injectable } from '@angular/core';
/*
@Injectable({
  providedIn: 'root'
})
*/
export class AuthorService {

  getAuthors(){
    return ['tobias', 'peter', 'matthias', 'roman','frieder'];
  }
}
