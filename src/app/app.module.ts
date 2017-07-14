import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './content/home-page/home-page.component';
import { HeaderComponent } from './inc/header/header.component';
import { FooterComponent } from './inc/footer/footer.component';
import { AboutPageComponent } from "app/content/about-page/about-page.component";
import { PortfolioPageComponent } from './content/portfolio-page/portfolio-page.component';
import { HireMePageComponent } from './content/hire-me-page/hire-me-page.component';
import { AboutSectionComponent } from './content/home-page/about-section/about-section.component';
import { TestimonialSectionComponent } from './content/home-page/testimonial-section/testimonial-section.component';
import { PortfolioSectionComponent } from './content/home-page/portfolio-section/portfolio-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioPageComponent,
    HireMePageComponent,
    AboutSectionComponent,
    TestimonialSectionComponent,
    PortfolioSectionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
        {path: '', component: HomePageComponent },
        {path: 'about', component: AboutPageComponent },
        {path: 'portfolio', component: PortfolioPageComponent },
        {path: 'hire-me', component: HireMePageComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
