import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo:"main", pathMatch:'full' },
  // { path: 'login', component: LoginComponent },
  {
    path: 'main', component: AppComponent,
    children: [
        { path: '', loadChildren: () => import('./component/dashboard/dashboard.module').then(m => m.DashboardModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
