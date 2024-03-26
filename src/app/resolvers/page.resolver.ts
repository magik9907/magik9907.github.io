import { ResolveFn } from '@angular/router';
import { StoreService } from '../services/store.service';
import { inject } from '@angular/core';
import { Project } from '../../types';
import { PageService } from '../services/page.service';
import { tap } from 'rxjs';

export const pageResolver: ResolveFn<Project> = (route, state) => {
  const page = route.params['name'];
  const store = inject(StoreService);
  if (store.isProject(page)) return store.getProject(page);
  return inject(PageService)
    .getPageContent(page)
    .pipe(
      tap((el) => {
        store.setProject(page, el);
      })
    );
};
