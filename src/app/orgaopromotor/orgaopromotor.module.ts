import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';

import { OrgaopromotorRoutingModule } from './orgaopromotor-routing.module';
import { OrgaopromotorComponent } from './orgaopromotor.component';


@NgModule({
  declarations: [
    OrgaopromotorComponent
  ],
  imports: [
    CommonModule,
    OrgaopromotorRoutingModule,
    NbMenuModule,
    ThemeModule
  ]
})
export class OrgaopromotorModule { }
