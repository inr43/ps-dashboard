import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ProjectComponent } from './project/project.component';
import { ResourceAddComponent } from './resource-add/resource-add.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent
  }, 
  {
    path: 'project',
    component: ProjectComponent
  }, 
  {
    path: 'resource',
    component: ResourceAddComponent
  }, 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
