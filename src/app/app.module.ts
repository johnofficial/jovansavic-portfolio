import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomePageComponent } from './content/home-page/home-page.component';
import { HeaderComponent } from './inc/header/header.component';
import { FooterComponent } from './inc/footer/footer.component';
import { AboutPageComponent } from 'app/content/about-page/about-page.component';
import { PortfolioPageComponent } from './content/portfolio-page/portfolio-page.component';
import { HireMePageComponent } from './content/hire-me-page/hire-me-page.component';
import { AboutSectionComponent } from './content/home-page/about-section/about-section.component';
import { TestimonialSectionComponent } from './content/home-page/testimonial-section/testimonial-section.component';
import { PortfolioSectionComponent } from './content/home-page/portfolio-section/portfolio-section.component';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { RequestsService } from 'app/shared/requests.service';
import { PortfolioViewComponent } from 'app/content/portfolio-page/portfolio-view/portfolio-view.component';
import { SubscribeSectionComponent } from './content/home-page/subscribe-section/subscribe-section.component';
import { HireMePageService } from './content/hire-me-page/service/hire-me-page.service';

declare var Hammer: any;

export class MyHammerConfig extends HammerGestureConfig  {
  buildHammer(element: HTMLElement) {
    const mc = new Hammer(element, {
      touchAction: 'pan-y'
    });
    return mc;
  }

  overrides = <any>{
    'swipe': {velocity: 0.4, threshold: 20} // override default settings

  }
}

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
    PortfolioSectionComponent,
    PortfolioViewComponent,
    SubscribeSectionComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
        {path: '', component: HomePageComponent },
        {path: 'about', component: AboutPageComponent },
        {path: 'portfolio', component: PortfolioPageComponent },
        {path: 'hire-me', component: HireMePageComponent },
        {path: 'portfolio/:id', component: PortfolioViewComponent },
    ], { useHash: true })
  ],
  providers: [
    {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MyHammerConfig,
    },
    RequestsService,
    HireMePageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
