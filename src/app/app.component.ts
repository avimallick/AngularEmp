import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstangular'; //Either declare type or initialize 
  first:number;
  institution:string;

  constructor()
  {
    this.first=5;
    this.title="Eurofins";
    this.institution = "Eurofins IT Solutions";
  }

}



