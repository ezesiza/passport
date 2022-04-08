import { ActionReducerMap, createFeatureSelector, createSelector } from "@ngrx/store";
import { postReducer } from "./posts.reducers";
import {PostState } from "./posts.reducers";

export interface State {
  posts: PostState,
}

export const reducers : ActionReducerMap<State> = {
  posts: postReducer,
}

const getPostFeatureState = createFeatureSelector<PostState>('posts');

export const getCurrentQuery = createSelector( getPostFeatureState, state => state.currentQuery);

export const selectFilteredItems =  createSelector(getPostFeatureState,state=> state.filteredPosts);

export const getError = createSelector( getPostFeatureState, state => state.error);
