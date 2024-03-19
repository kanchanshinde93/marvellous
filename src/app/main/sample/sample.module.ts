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
import { PricingComponent } from './pricing/pricing.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BlogComponent } from './blog/blog.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { BlogdetailsComponent } from './blogdetails/blogdetails.component';
import { CryptoComponent } from './crypto/crypto.component';

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
  },
  {
    path: 'pricing',
    component: PricingComponent,
    data: { animation: 'pricing' }
  },
  {
    path: 'ContactUs',
    component: ContactUsComponent,
    data: { animation: 'ContactUs' }
  },
  {
    path: 'blog',
    component: BlogComponent,
    data: { animation: 'blog' }
    
  }
  ,
  {
    path: 'PrivacyPolicy',
    component: PrivacyPolicyComponent,
    data: { animation: 'PrivacyPolicy' }
  },
  {
    path: 'Blogdetails',
    component: BlogdetailsComponent,
    data: { animation: 'Blogdetails' }
  },  {
    path: 'crypto',
    component: CryptoComponent,
    data: { animation: 'crypto' }
  }
];

@NgModule({
  declarations: [SampleComponent, HomeComponent, AboutComponent, OurfeatureComponent, PricingComponent, ContactUsComponent, BlogComponent, PrivacyPolicyComponent, BlogdetailsComponent, CryptoComponent],
  imports: [RouterModule.forChild(routes), ContentHeaderModule, TranslateModule, CoreCommonModule,CommonModule,CoreDirectivesModule],
  exports: [SampleComponent, HomeComponent,AboutComponent]
})
export class SampleModule {}
