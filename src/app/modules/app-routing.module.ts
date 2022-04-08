import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPageComponent } from '../components/list-page/list-page.component';
import { PostDetailComponent } from '../components/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: ListPageComponent, pathMatch: 'full' },
  { path: 'post/:id', component: PostDetailComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
