import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component:  CreateComponent },
  { path: 'edit/:index/:name', component: EditComponent },
  { path: 'department/:name', component: ShowComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
