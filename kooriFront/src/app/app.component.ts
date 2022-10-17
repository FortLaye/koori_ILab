import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor() {}

  // Angular 2 Life Cycle event when component has been initialized

  title = 'kooriFront';


  ngOnInit() {
    this.getAllPeople();
  }

  getAllPeople() {

  }

}
