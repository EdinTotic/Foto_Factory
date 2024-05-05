import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AwardsComponent } from './awards/awards.component';
import { HomeComponent } from './home/home.component';
import { AnnaComponent } from './anna/anna.component';
import { ElvyraComponent } from './elvyra/elvyra.component';
import { NouriComponent } from './nouri/nouri.component';
import { EdinComponent } from './edin/edin.component';
import { MiroslavComponent } from './miroslav/miroslav.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'anna',
    component: AnnaComponent,
  },
  {
    path: 'awards',
    component: AwardsComponent,
  },
  {
    path: 'clients',
    component: ClientsComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'edin',
    component: EdinComponent,
  },
  {
    path: 'elvyra',
    component: ElvyraComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: 'miroslav',
    component: MiroslavComponent,
  },
  {
    path: 'nouri',
    component: NouriComponent,
  },
  {
    path: 'testimonials',
    component: TestimonialsComponent,
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
