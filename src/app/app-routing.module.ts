import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengesComponent } from './challenges/challenges.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { MainComponent } from './main/main.component';
import { PipelineComponent } from './pipeline/pipeline.component';
import { ProjectComponent } from './project/project.component';
import { ResourceAddComponent } from './resource-add/resource-add.component';
import { ResourceDashboardComponent } from './resource-dashboard/resource-dashboard.component';

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
  {
    path: 'pipeline',
    component: PipelineComponent
  },
  {
    path: 'resources',
    component: ResourceDashboardComponent
  },
  {
    path: 'documentation',
    component: DocumentationComponent
  },
  {
    path: 'challenges',
    component: ChallengesComponent
  }


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
