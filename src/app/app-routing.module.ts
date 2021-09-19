import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { ColumnContainerComponent } from './column-container/column-container.component';
import { MainFormComponent } from './main-form/main-form.component';

const routes: Routes = [
    { path: '', component: MainFormComponent },
    { path: 'easy-r', component: ColumnContainerComponent },
  ];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }