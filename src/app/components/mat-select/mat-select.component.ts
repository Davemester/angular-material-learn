import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-select',
  templateUrl: './mat-select.component.html',
  styleUrls: ['./mat-select.component.scss']
})
export class MatSelectComponent implements OnInit {
  selectedValue: string
  constructor() { }

  ngOnInit(): void {
  }

}
