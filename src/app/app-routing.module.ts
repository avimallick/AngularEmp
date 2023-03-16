import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpaddComponent } from './empadd/empadd.component';
import { EmplistComponent } from './emplist/emplist.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
  {path:'samp',component:SampleComponent},
  {path:'emplist', component:EmplistComponent},
  {path:'register', component: EmpaddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
