import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CoreDirectivesModule } from '@core/directives/directives';
import { CoreCommonModule } from '@core/common.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,CommonModule,CoreCommonModule,CoreDirectivesModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class ComonlaypoutModule { }
