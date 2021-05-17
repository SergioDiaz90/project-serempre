import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { SelectedService } from 'src/app/services/selected.service';




@Component({
  selector: 'view-card-component',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class ViewCardComponent implements OnInit, AfterViewInit {

  @Input() title!: any;
  @Input() text!: any;
  @Input() price!: boolean;
  @Input() price_value!: any;
  @Input() id!: any;

  public card!: any;


  constructor(
    private selected: SelectedService,
  ) {
    this.card = {};
  }



  public selected_figure ( event: any ) {
    this.selected.add_border_selected( this.id );
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }
}
