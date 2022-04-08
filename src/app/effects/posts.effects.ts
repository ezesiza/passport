import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable, of } from "rxjs";
import {catchError,map, mergeMap} from 'rxjs/operators';

import { PostsActionTypes, PostsLoadFailed, PostsLoadSuccess } from "../actions/post.actions";
import { PostService } from "../services/post.service";

@Injectable()
export class PostsEffects {
  constructor(private actions$ : Actions, private postService: PostService){}

  loadPosts$ : Observable<Action> = createEffect(()=>{
    return this.actions$.pipe(
      ofType(PostsActionTypes.GetAllPosts),
      mergeMap(()=> {
        return this.postService.getAllPosts().pipe(
          map(post => {
            return new PostsLoadSuccess(post)
          }),
          catchError((err)=> of(new PostsLoadFailed(err)))
        )
      })
    )
  })


}
