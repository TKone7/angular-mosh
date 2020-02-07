import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'], // array can have more than one CSS
  // name all inputs (danger: if update variable name)
  // ,inputs: ['isFavorite']
  encapsulation: ViewEncapsulation.Emulated // Default: emulates shadow DOM
})
export class StarComponent {
  // mark as input and then write in app.component.html [isFavorite]="value"
  // is-favorite is the alias for the DOM property
  @Input('is-favorite') isFavorite: boolean;

  // initializes output EventEmitter (must be seperattly emitted)
  // change is the alias
  @Output('change') click = new EventEmitter();

  sizeInPt = 30;
  size = this.sizeInPt+'pt';
  
  onClick(){
    this.isFavorite = !this.isFavorite;
    this.sizeInPt+=5;
    this.size = this.sizeInPt +'pt';
    // raise event to outside world
    this.click.emit({newValue: this.isFavorite});
  }

}
 export interface FavoriteChangedEventArgs {
  newValue: boolean
}