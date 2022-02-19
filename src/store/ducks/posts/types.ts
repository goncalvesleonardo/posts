export enum PostsTypes {
  LOAD_REQUEST = '@posts/LOAD_POST',
  LOAD_SUCCESS = '@posts/LOAD_SUCCESS',
  LOAD_FAILURE = '@posts/LOAD_FAILURE',
}

export interface Post {
  id: string;
  date: string;
  assunto: string;
  detalhe: string;
}

export interface PostsState {
  readonly data: Post[];
  // readonly error: boolean
}
