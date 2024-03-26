export interface PeriodPresentation {
  date: { start: Date; end?: Date };
  title: string;
  description: string;
  position: 'bottom' | 'top';
  order: number;
  color?: string;
  background?: string;
  icon: string;
  link?: string;
}
export type PeriodPresentations = PeriodPresentation[];

export interface Project {
  title: string;
  images: string[];
  group: boolean;
  role: string;
  technology: string[];
  description: string[];
  functionalities: string[];
}
