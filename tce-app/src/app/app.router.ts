import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { RegistrationComponent } from './components/registration/registration.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'register', component: RegistrationComponent},
  ]
  
  export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes); 