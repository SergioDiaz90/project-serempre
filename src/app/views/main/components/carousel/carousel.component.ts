import { Component, OnInit, Input, AfterViewChecked } from '@angular/core';
import { SelectedService } from 'src/app/services/selected.service';
import { Products } from 'src/app/data/databases'

@Component({
  selector: 'view-carousel-component',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class ViewCarouselComponent implements OnInit, AfterViewChecked {

  @Input() info_carousel!: any;
  public galery!: any[];
  public icons!: any[];
  public text_icons!: any[];
  public img_selected_url: any = '';


  constructor(
    private selected: SelectedService,
  ) {
    this.galery = [];
    this.icons = [];
    this.text_icons = [];
  }


  private construction_data () {
    let values = Object.values( this.info_carousel );
    let key = Object.keys( this.info_carousel );

    for ( let i = 1; i < key.length; i ++ ) {
      if ( key[i].indexOf('icon') === -1 && key[i].indexOf('text') === -1 ) {
        this.galery.push( values[i] );
      } else if ( key[i].indexOf('icon') !== -1  && key[i].indexOf('text') === -1){
        this.icons.push( values[i] );
      } else {
        this.text_icons.push( values[i] );
      }
    }

    console.log( this.text_icons );
  }



  public selected_figure ( event: any ) {
    this.selected.add_border_selected( event.id );
  }


  public set_src_image_focus ( event: any ) {

      let img: any = document.getElementById(event.id)?.childNodes[0];
      let url = img.getAttribute( 'src' );

      let figure_big = document.getElementById('ref_figure_img');
      let figure_big_img: any = figure_big?.childNodes[0];
      figure_big_img.setAttribute( 'src' , url );

  }



  ngOnInit(): void {
    this.construction_data();
  }

  ngAfterViewChecked () {
  }

}
