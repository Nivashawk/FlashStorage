import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ServiceComponent } from './pages/service/service.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ServiceFormComponent } from './components/service-form/service-form.component';
import { DitComponent } from './components/forms/dit/dit.component';
import { ServiceDitComponent } from './pages/service-dit/service-dit.component';
import { ServiceDiComponent } from './pages/service-di/service-di.component';
import { ServiceConformingComponent } from './pages/service-conforming/service-conforming.component';
import { ServiceWDComponent } from './pages/service-wd/service-wd.component';
import { DitGeneralComponent } from './components/forms/dit-general/dit-general.component';


const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"services",component:ServiceComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"contact-us",component:ContactUsComponent},
  {path:"nav",component:NavigationComponent},
  {path:"forms",component:ServiceFormComponent},
  {path:"service/dit",component:ServiceDitComponent},
  {path:"service/di",component:ServiceDiComponent},
  {path:"service/conforming",component:ServiceConformingComponent},
  {path:"service/WD",component:ServiceWDComponent},
  {path:"form/dit",component:DitComponent},
  {path:"form/dit_general",component:DitGeneralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [
  HomeComponent,
  ContactUsComponent,
  AboutUsComponent,
  ProjectsComponent,
  ServiceComponent,
  NavigationComponent,
  ServiceFormComponent,
  DitComponent,
  ServiceDitComponent,
  ServiceDiComponent,
  ServiceWDComponent,
  ServiceConformingComponent,
  DitGeneralComponent
]
