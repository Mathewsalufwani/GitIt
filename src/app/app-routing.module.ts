import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { NotFoundComponent } from './not-found/not-found.component';



const routes: Routes = [
  { path: 'landing', component: LandingComponent},
  { path: 'search', component: SearchUserComponent},
  { path: '', redirectTo:"/landing", pathMatch:"full"},
  { path:'**', component:NotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
