import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  // interpolation
  itemCount: number = 4;

  // single way data binding
  btnText: string = 'Add an Item'

  constructor() { }

  ngOnInit(): void {
  }

}
