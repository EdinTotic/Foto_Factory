import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
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
import { SpacerComponent } from './spacer/spacer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    AwardsComponent,
    HomeComponent,
    AnnaComponent,
    ElvyraComponent,
    NouriComponent,
    EdinComponent,
    MiroslavComponent,
    TestimonialsComponent,
    ClientsComponent,
    PortfolioComponent,
    SpacerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
