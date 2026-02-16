export interface Benefit {
  id: string;
  title: string;
  description: string;
  iconName: 'heart' | 'music' | 'flame' | 'users';
}

export interface PoemResponse {
  verse: string;
}
