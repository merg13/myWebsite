import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProfessionalComponent } from './professional/professional.component';


const routes: Routes = [
  { path: '', component: CardContainerComponent },
  { path: 'About', component:AboutComponent},
  { path: 'Education', component: EducationComponent},
  { path: 'Projects', component: ProjectsComponent},
  { path: 'Professional', component: ProfessionalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
