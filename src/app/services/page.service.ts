import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class PageService {
  constructor(private http: HttpClient, private router: ActivatedRoute) {}

  getPageContent(page: string) {
    return this.http.get<Project>(`/assets/pages/${page}.json`);
  }
}
