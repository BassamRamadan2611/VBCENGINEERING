import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutDetailsComponent } from './components/about-details/about-details.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesDetailsComponent } from './components/services-details/services-details.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { WhyChooseUsComponent } from './components/why-choose-us/why-choose-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { MissionComponent } from './components/mission/mission.component';
import { OptionsComponent } from './components/options/options.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'mission', component: MissionComponent },
  { path: 'options', component: OptionsComponent },

  { path: 'about-details', component: AboutDetailsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'benefits', component: BenefitsComponent },
  { path: 'choose-us', component: WhyChooseUsComponent },



  { path: 'services/:id', component: ServicesDetailsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
