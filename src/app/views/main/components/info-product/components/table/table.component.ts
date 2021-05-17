import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'view-table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class ViewTableComponent implements OnInit {

  @Input() type!: string;
  @Input() specifications!: string;


  constructor() { }


  ngOnInit(): void {
    console.log( this.type );
  }

}
