export interface IKeyNotes {
  id: string;
  title: string;
}

export interface INotes extends IKeyNotes {
  createdDate: number;
  lastUpdated?: number;
  content: string;
}
