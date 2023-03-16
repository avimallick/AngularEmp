import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  a:number;
  b:number;
  c:number;
  flag:boolean;
  studentname:string;
  image:string;

  constructor() {
    this.a=0;
    this.b=0;
    this.flag=false;
    this.image="../../assets/imagecube.jpg";
  }

  ngOnInit(): void {
    
  }

  add():void{
    this.c = this.a + this.b;
    if(this.c>0){
      this.flag=true;
    }
  }

}
