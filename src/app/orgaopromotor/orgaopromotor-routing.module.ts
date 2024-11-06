import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgaopromotorComponent } from './orgaopromotor.component';

const routes: Routes = [{ path: '', component: OrgaopromotorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrgaopromotorRoutingModule { }
