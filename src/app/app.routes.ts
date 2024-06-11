import { Routes } from '@angular/router';
import { HalamanLoginComponent } from './halaman-login/halaman-login.component';
import { HalamanUtamaComponent } from './halaman-utama/halaman-utama.component';


export const routes: Routes = [
  // { path: '', redirectTo: 'halaman-utama', pathMatch: 'full' },
  // { path: 'halaman-login', component: HalamanLoginComponent },
  { path: 'login', component: HalamanLoginComponent },
  { path: '', component: HalamanUtamaComponent },

];
