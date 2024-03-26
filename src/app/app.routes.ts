import { Routes } from '@angular/router';
import { ProjectComponent } from './pages/project/project.component';
import { pageResolver } from './resolvers/page.resolver';

export const routes: Routes = [
  {
    path: 'project/:name',
    component: ProjectComponent,
    resolve: { content: pageResolver },
  },
  { path: '*', redirectTo: '/' },
];
