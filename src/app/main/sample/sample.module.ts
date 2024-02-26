import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CoreCommonModule } from '@core/common.module';
import { CommonModule } from '@angular/common';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';

import { SampleComponent } from './sample.component';
import { HomeComponent } from './home.component';
import { CoreDirectivesModule } from '@core/directives/directives';
import { AboutComponent } from './about/about.component';
import { OurfeatureComponent } from './ourfeature/ourfeature.component';

const routes = [
  {
    path: 'sample',
    component: SampleComponent,
    data: { animation: 'sample' }
  },
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animation: 'home' }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'about' }
  },
  {
    path: 'Ourfeature',
    component: OurfeatureComponent,
    data: { animation: 'Ourfeature' }
  }
];

@NgModule({
  declarations: [SampleComponent, HomeComponent, AboutComponent, OurfeatureComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule,CommonModule,CoreDirectivesModule],
  exports: [SampleComponent, HomeComponent,AboutComponent]
})
export class SampleModule {}
