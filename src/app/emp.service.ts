import { Injectable } from '@angular/core';
import { Employee } from 'src/Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  emps:Employee[]=[
    {
      Eid:100, 
      Ename:"Avinash", 
      Salary:45000, 
      Doj:new Date("4/5/2021"), 
      Edept:{Did:1, Dname:"Web Developer", Dlocation:"Chennai"}, 
      Eskill:[
        {Skid:1, Skname:"Angular"}, 
        {Skid:2, Skname:".NET"}
      ]
    },
    {
      Eid:101, 
      Ename:"Syam",
      Salary:45000, 
      Doj:new Date("4/4/2021"),
      Edept:{Did:2, Dname:"iOS Developer", Dlocation:"Bangalore"},
      Eskill:[
        {Skid:3, Skname:"Swift"},
        {Skid:2, Skname:".NET"}
      ]
    },
    {
      Eid:102, 
      Ename:"Harshithaa", 
      Salary:45000, 
      Doj:new Date("6/5/2021"),
      Edept:{Did:2, Dname:"iOS Developer", Dlocation:"Bangalore"},
      Eskill:[
        {Skid:3, Skname:"Swift"},
        {Skid:4, Skname:"SQL"}
      ]
    },
    {
      Eid:103, 
      Ename:"Bhavesh", 
      Salary:45000, 
      Doj:new Date("4/5/2022"),
      Edept:{Did:3, Dname:"Accounting", Dlocation:"Chennai"},
      Eskill:[
        {Skid:10, Skname:"Accounting"},
        {Skid:11, Skname:"Tally"}
      ]
    }
  ]
   
   constructor() {
   }

   getAllEmployees():any{
    return this.emps;
   }

   addEmployee(en:Employee):any{
    this.emps.push(en);
   }
}
