import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      children: [
          {
            path: 'auth',
            loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
          },
          {
            path: 'demo',
            loadChildren: () => import('./pages/demo/demo.module').then(m => m.DemoModule)
          }
      ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
