import { Injectable } from '@angular/core';
import { Project } from '../../types';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  projectContent: { [key: string]: Project } = {};
  constructor() {}

  isProject(key: string) {
    return key in this.projectContent;
  }

  getProject(key: string) {
    return this.projectContent[key];
  }

  setProject(key: string, content: Project) {
    this.projectContent[key] = content;
  }
}
