import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ComponentsModule} from '@scullyio/ng-lib';
import {ProjectsRoutingModule} from './projects-routing.module';
import {ProjectsComponent} from './projects.component';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, ComponentsModule],
})
export class ProjectsModule {}
