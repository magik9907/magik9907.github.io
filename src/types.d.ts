export interface PeriodPresentation {
  date: { start: Date; end?: Date };
  title: string;
  description: string;
  position: 'bottom' | 'top';
  order: number;
  color?: string;
  background?: string;
  icon: string;
}
export type PeriodPresentations = PeriodPresentation[];
