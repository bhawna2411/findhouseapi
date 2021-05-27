import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { AgencyComponent } from './agency/agency.component';
//import { AgentComponent } from './agent/agent.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'index', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }