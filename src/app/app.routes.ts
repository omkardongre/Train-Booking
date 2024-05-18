import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';
import { BookingsComponent } from './pages/bookings/bookings.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { UserLoginComponent } from './pages/user-login/user-login.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo : 'home',
        pathMatch : 'full'
    },
    {
        path : 'registerUser',
        component : UserRegistrationComponent
    },
    {
        path : 'login',
        component : UserLoginComponent
    },
    {
        path : 'home',
        component : HomeComponent
    },
    {
        path:'search/:fromStationID/:toStationID/:dateOfTravel',
        component: SearchComponent,
    },
    {
        path: 'bookings',
        component : BookingsComponent
    },
    {
        path : 'admin',
        component : AdminComponent
    }
];

