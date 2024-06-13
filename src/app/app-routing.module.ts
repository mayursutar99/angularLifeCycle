import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { Child2Component } from './child2/child2.component';

const routes: Routes = [
  {
    path:'',component:Child2Component
  },
  {
    path:'child',component:ChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
