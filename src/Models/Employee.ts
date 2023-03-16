import { Department } from "./Department";
import { Skill } from "./Skill";

export interface Employee //instead of public, we give export AND instead of class, we give interface
{
    Eid:number;
    Ename:string;
    Salary:number;
    Doj:Date;
    Edept:Department;
    Eskill:Skill[];
}