import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectedService {

  public id_now!:any;
  public elm_old!: any;


  constructor() {
    this.id_now = '';
    this.elm_old = null;
  }

  public add_border_selected (id: string) {

    if ( this.elm_old === null ) {
      let elem = document.getElementById( id );
      elem?.classList.add('border-selected');
      this.elm_old = elem;
    } else {
      this.elm_old.classList.remove('border-selected');
      let elem = document.getElementById( id );
      elem?.classList.add('border-selected');
      this.elm_old = elem;
    }
  }

}
