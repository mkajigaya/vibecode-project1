export interface Bug {
  id: number;
  title: string;
  description: string;
  status: 'open' | 'in_progress' | 'closed';
}
