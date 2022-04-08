export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string[];
}

export interface SavedScrollState {
  url: string;
  xPosition: number;
  yPosition: number;
}

export interface SavedComponentState {
	url: string;
	states: { [key: string]: any };
}
