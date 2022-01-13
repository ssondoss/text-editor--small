import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CToFComponent } from './c-to-f/c-to-f.component';
import { RepeatComponent } from './repeat/repeat.component';

const routes: Routes = [
  { path: 'c-to-f', component: CToFComponent },
  { path: '', component: AppComponent },
  { path: 'repeat', component: RepeatComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
