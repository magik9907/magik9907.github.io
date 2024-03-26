import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PeriodPresentationComponent } from '../../components/period-presentation/period-presentation/period-presentation.component';
import { PeriodPresentations } from '../../../types';

@Component({
  selector: 'app-experiance',
  standalone: true,
  imports: [PeriodPresentationComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './experiance.component.html',
  styleUrl: './experiance.component.scss',
})
export class ExperianceComponent {
  readonly events: PeriodPresentations = [
    {
      date: { start: new Date('2015-09-01'), end: new Date('2019-05-01') },
      title: 'Technical secondary school',
      description:
        'The period of acquiring knowledge of the operation of computers, information systems and programming.',
      position: 'top',
      order: 0,
      icon: 'school',
    },
    {
      date: { start: new Date('2019-10-01'), end: new Date('2023-01-30') },
      title: 'Bawechelor in Computer Science',
      description:
        'Developing knowledge primarily in software development, but also other skills.',
      position: 'top',
      background: '#012404',
      color: 'white',
      order: 1,
      icon: 'school',
    },
    {
      date: { start: new Date('2023-02-01'), end: new Date('2024-06-30') },
      title: 'Master in Computer Science',
      description:
        'Expanding knowledge about programming and the use of various techniques for data processing.',
      position: 'top',
      background: '#012404',
      color: 'white',
      order: 4,
      icon: 'school',
    },
    {
      date: { start: new Date('2021-10-01'), end: new Date('2023-10-30') },
      title: 'Comarch',
      description:
        'Software development in Angular, Java, NodeJS technologies.',
      position: 'bottom',
      order: 2,
      icon: 'work',
      background: '#152a95',
      color: 'white',
    },
    {
      date: { start: new Date('2023-10-01'), end: new Date('2024-01-30') },
      title: 'Decision tree builder',
      description:
        'A solution for building decision trees in React and Python. I was responsible for the front-end part.',
      position: 'bottom',
      background: '#012404',
      color: 'white',
      order: 5,
      icon: 'build',
      link: 'decision-tree-builder',
    },
    {
      date: { start: new Date('2023-10-01'), end: new Date('2024-01-30') },
      title: 'kNN classification tool',
      description:
        'A tool for data classification and visualization using the k-nearest neighborhood algorithm in flutter technology.',
      position: 'bottom',
      background: '#012404',
      color: 'white',
      order: 6,
      icon: 'build',
      link: 'knn-classification-tool',
    },
    {
      date: { start: new Date('2021-11-01'), end: new Date('2023-01-30') },
      title: 'A system for managing orders in a service company',
      description:
        'Java, Angular, Keycloak, PostgreSQL. A tool for managing orders in a service company with a schedule optimization function.',
      position: 'bottom',
      background: '#012404',
      color: 'white',
      order: 3,
      icon: 'build',
      link: 'managing-orders',
    },
  ];
}
