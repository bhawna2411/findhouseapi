import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { NgImageSliderModule } from 'ng-image-slider';
//import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './register/register.component';
//import { AgentComponent } from './agent/agent.component';
//import { AgencyComponent } from './agency/agency.component';
import { OwlModule} from 'ngx-owl-carousel';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    //AgentComponent,
    //AgencyComponent,
 
  ],
  imports: [
    BrowserModule,
    //CarouselModule ,
    //NgImageSliderModule,
    OwlModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }