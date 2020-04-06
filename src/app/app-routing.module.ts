import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { UserFormComponent } from './user-form/user-form.component';


const routes: Routes = [
  {path: 'comp-two', component: CompTwoComponent},
  {path: 'people', component: PeopleListComponent},
  {path: 'form', component: UserFormComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
