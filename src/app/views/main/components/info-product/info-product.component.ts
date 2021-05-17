import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SelectedService } from 'src/app/services/selected.service';

@Component({
  selector: 'view-info-product-component',
  templateUrl: './info-product.component.html',
  styleUrls: ['./info-product.component.scss']
})
export class ViewInfoProductComponent implements OnInit, AfterViewInit {

  @Input() info_product!: any;
  public title_wrapper!: any[];
  public price_wrapper!: any[];
  public characteristics_wrapper!: any[];
  public choose_wrapper!: any[];
  public coverange_wrapper!: any[];
  public features_wrapper!: any[];
  public specification_wrapper!: any[];
  public card_info!: any[];
  public card_info_coverange!: any[];
  public card_info_features!: any[];


  constructor(
    private selected: SelectedService,
  ) {
    this.title_wrapper = [];
    this.price_wrapper = [];
    this.characteristics_wrapper = [];
    this.choose_wrapper = [];
    this.coverange_wrapper = [];
  }


  private construction_data ( values: any ): any {
    for ( let i = 0; i < this.info_product.length; i++ ){
      let k = Object.keys( this.info_product[i] );
      let v: any = Object.values( this.info_product[i] );

      if ( k[0] === 'title_wrapper') {

        this.title_wrapper = [ ...Object.values( v[0] ) ];

      } else if ( k[0] === 'price_wrapper') {

        this.price_wrapper = [ ...Object.values( v[0] ) ];

      } else if ( k[0] === 'characteristics__wrapper') {
        this.characteristics_wrapper = [ ...Object.values( v[0] ) ];
      } else if ( k[0] === 'choose_wrapper') {
        this.choose_wrapper = [ ...Object.values( v[0] ) ];
      } else if ( k[0] === 'coverange_wrapper') {
        this.coverange_wrapper = [ ...Object.values( v[0] ) ];
      } else if ( k[0] === 'features_wrapper') {
        this.features_wrapper = [ ...Object.values( v[0] ) ];
      } else if ( k[0] === 'specification_wrapper') {
        this.specification_wrapper = [ ...Object.values( v[0] ) ];
      }
    }
    this.card_info = [ ...this.choose_wrapper.slice(1) ];
    this.card_info_coverange = [ ...this.coverange_wrapper.slice(1) ];
    this.card_info_features = [ ...this.features_wrapper.slice(1) ];

  }


  public handler_event_see_text ( event: any ) {
    let article_0 = null
    let article_1 = null;
    let article_2 = null;

    if ( event === null ) {
      article_0 = document.getElementById('id-article-0');
      article_0?.classList.add('selected');
      return;
    }

    let tab_press = event.srcElement.attributes.value.value;
    article_0 = document.getElementById('id-article-0');
    article_1 = document.getElementById('id-article-1');
    article_2 = document.getElementById('id-article-2');

    if ( tab_press === '0' ) {
      article_0?.classList.add('selected');
      article_1?.classList.remove('selected');
      article_2?.classList.remove('selected');
    } else if ( tab_press === '1' ) {
      article_0?.classList.remove('selected');
      article_1?.classList.add('selected');
      article_2?.classList.remove('selected');
    } else {
      article_0?.classList.remove('selected');
      article_1?.classList.remove('selected');
      article_2?.classList.add('selected');
    }

  }


  public selected_figure ( event: any ) {
    this.selected.add_border_selected( event.id );
  }



  ngOnInit(): void {
    this.construction_data( null );
  }

  ngAfterViewInit() {
    this.handler_event_see_text( null );
  }
}
