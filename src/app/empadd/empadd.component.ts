import { Component } from '@angular/core';
import { Department } from 'src/Models/Department';
import { Skill } from 'src/Models/Skill';
import { Employee } from 'src/Models/Employee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-empadd',
  templateUrl: './empadd.component.html',
  styleUrls: ['./empadd.component.css']
})
export class EmpaddComponent {
  s1:number
  
  e:Employee;
  d:Department[] = [{Did:1, Dname:"Web Developer", Dlocation:"Chennai"}, {Did:2, Dname:"iOS Developer", Dlocation:"Bangalore"}, {Did:3, Dname:"Accounting", Dlocation:"Chennai"}];
  s:Skill[] = [{Skid:1, Skname:"Angular"}, {Skid:2, Skname:".NET"}, {Skid:3, Skname:"Swift"}, {Skid:4, Skname:"SQL"}, {Skid:10, Skname:"Accounting"}, {Skid:11, Skname:"Tally"}];

  //emps:Employee[];
  constructor(private empservice:EmpService) {
    this.e={
      Eid:0, 
      Ename:"", 
      Salary:0, 
      Doj:new Date("4/5/2021"),
      Edept:{Did:0, Dname:"", Dlocation:""},
      Eskill:[
        {Skid:0, Skname:""},
        {Skid:0, Skname:""}
      ]
    };
  }

  AddNew():void{
    this.empservice.addEmployee(this.e);
    console.log(this.e);
  }
}


