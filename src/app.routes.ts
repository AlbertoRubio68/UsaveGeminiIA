import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'uSave Formació - Inici' },
  { path: 'course/:id', component: CourseDetailComponent, title: 'uSave Formació - Detall del Curs' },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
