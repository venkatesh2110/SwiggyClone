import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestuarantComponent } from './restuarant/restuarant.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'restuarants', component: RestuarantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RestuarantComponent];
