import { PostActions, PostsActionTypes } from '../actions/post.actions';
import { Post } from '../models/post.model';

export interface PostState {
  posts: Post[];
  filteredPosts: Post[];
  currentQuery:string;
  error: any;
}

export const initialState: PostState = {
  posts: [],
  filteredPosts: [],
  currentQuery:'',
  error: '',
};

export function postReducer( state = initialState, action: PostActions ): PostState {
  switch (action.type) {
    case PostsActionTypes.PostsLoadSuccess:

      let updatedFilter = (state.filteredPosts.length > 0  && state.currentQuery.length >0 ) ? state.filteredPosts : action.posts;
      return { ...state, posts: action.posts, filteredPosts: action.posts, error: '' };
    case PostsActionTypes.SearchAction:
      const querySearchList = action.payload.length <= 0 ? state.posts : state.posts.filter(
        (item) => item.body.includes(action.payload) || item.title.includes(action.payload));

      return { ...state, posts: state.posts, filteredPosts: querySearchList, currentQuery:action.payload, error:'' };
  }
  return state;
}
