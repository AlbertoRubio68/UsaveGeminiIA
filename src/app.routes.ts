import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { SpacesComponent } from './spaces/spaces.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'uSave Formació - Inici' },
  { path: 'course/:id', component: CourseDetailComponent, title: 'uSave Formació - Detall del Curs' },
  { path: 'espais-cardioprotegits', component: SpacesComponent, title: 'uSave Formació - Espais Cardioprotegits' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
