import { Action } from '@ngrx/store';
import { Post } from '../models/post.model';

export enum PostsActionTypes {
  GetAllPosts = 'Get All Posts',

  GetPostById = '[Posts] Get One Post By Id',
  GetPostByIdSuccess = '[Posts] Get One Post By Id Success',

  SetCurrentQuery = 'Get Current Query',

  PostsLoadSuccess = 'Posts Loaded Success',
  PostsLoadFailed = 'Posts Loaded Failed',

  SearchAction = '[Get Search] Get Search',
}

export class GetAllPosts implements Action {
  readonly type = PostsActionTypes.GetAllPosts;
  constructor() {}
}

export class SetCurrentQuery implements Action {
  readonly type =  PostsActionTypes.SetCurrentQuery;
  constructor(public query : any){}
}

export class SearchAction implements Action {
  readonly type = PostsActionTypes.SearchAction;
  constructor(public payload: string) {}
}

export class PostsLoadSuccess implements Action {
  readonly type = PostsActionTypes.PostsLoadSuccess;
  constructor(public posts: Post[]) {}
}

export class GetPostByIdSuccess implements Action {
  readonly type = PostsActionTypes.GetPostByIdSuccess;
  constructor(public post: Post) {}
}

export class PostsLoadFailed implements Action {
  readonly type = PostsActionTypes.PostsLoadFailed;
  constructor(public error: any) {}
}

export class GetPostById implements Action {
  readonly type = PostsActionTypes.GetPostById;
  constructor(public id: number) {}
}

export type PostActions =
  | GetAllPosts
  | PostsLoadFailed
  | GetPostByIdSuccess
  | PostsLoadSuccess
  | GetPostById
  | SetCurrentQuery
  | SearchAction;
