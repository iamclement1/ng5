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
  btnText: string = 'Add an Item';

  goalText: string = 'My first life goal';

  goals = [];

  constructor() { }


  ngOnInit(): void {
    this.itemCount = this.goals.length;
  }

  addItem() {
    // this.goals.push(this.goalText);
    this.goalText= '';
    this.itemCount = this.goals.length;
  }

}
