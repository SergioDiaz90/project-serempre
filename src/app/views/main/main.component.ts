import { Component, OnInit, HostListener, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Products } from 'src/app/data/databases';



@Component({
  selector: 'view-main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class ViewMainComponent implements OnInit {

  private product!: any;
  public carousel!: any;
  public info!: any;


  @ViewChild('id_carousel_element') carousel_element!: ElementRef;


  constructor(
    private renderer: Renderer2,
    private elem: ElementRef
  ) {
    this.product = Products.headphones;
    this.carousel = this.product.carousel;
    this.info = this.product.info_product;
  }


  @HostListener('window:scroll', ['$event'])
  public handle_event_scroll_carousel ( event: any ) {
    if ( window.innerWidth > 769 ) {
      let carousel = this.carousel_element.nativeElement;
      let position = parseInt( carousel.getBoundingClientRect().top );
      let height = window.innerHeight / 3;
      
      if( position < height ) {
        carousel.style.position = 'fixed';
        carousel.style.width = '43.35%';
      } else {
        carousel.style.position = 'static';
      }
    }

  }

  ngOnInit(): void {
  }



}
