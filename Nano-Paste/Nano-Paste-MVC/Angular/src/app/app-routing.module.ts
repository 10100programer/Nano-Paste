import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewPasteComponent } from './view-paste/view-paste.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'p/:id', component: ViewPasteComponent },
  { path: 'p', component: HomepageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
