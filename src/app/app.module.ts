import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page';
import { SkillsComponent } from './skills-page/skills-page';
import { MyWorksComponent } from './my-works-page/my-works-page';
import { TestimonialPage } from './testimonial-page/testimonial-page';
import { ContactPageComponent } from './contact-page/contact-page';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SkillsComponent,
    MyWorksComponent,
    TestimonialPage,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
