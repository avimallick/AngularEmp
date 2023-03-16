import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/Models/Employee';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {
  
  emps:Employee[];
  constructor(private empservice:EmpService) {
    this.emps = this.empservice.getAllEmployees();
  }

  ngOnInit(): void {
    
  }
  
}
