import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EventsComponent} from './events/events.component';

const routes: Routes = [
  {path: 'events/:id', component: EventsComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
