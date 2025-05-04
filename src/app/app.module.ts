import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { AboutComponent } from './components/about/about.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { AboutDetailsComponent } from './components/about-details/about-details.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicesDetailsComponent } from './components/services-details/services-details.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { MissionComponent } from './components/mission/mission.component';
import { ConclussionComponent } from './components/conclussion/conclussion.component';
import { OptionsComponent } from './components/options/options.component';
import { SafeHtmlPipePipe } from './safe-html-pipe.pipe';

// Factory function for TranslateHttpLoader
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    AboutComponent,
    WhatWeDoComponent,
    AboutDetailsComponent,
    ServicesComponent,
    ServicesDetailsComponent,
    HomeComponent,
    ContactComponent,
    WhyChooseUsComponent,
    ExperienceComponent,
    BenefitsComponent,
    ContactFormComponent,
    MissionComponent,
    ConclussionComponent,
    OptionsComponent,
    SafeHtmlPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader, // Corrected from TranslateHttpLoader
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }