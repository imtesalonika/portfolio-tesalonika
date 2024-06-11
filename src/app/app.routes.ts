import { Routes } from '@angular/router';
import { HalamanLoginComponent } from './halaman-login/halaman-login.component';
import { HalamanUtamaComponent } from './halaman-utama/halaman-utama.component';

export const routes: Routes = [
  { path: 'halaman-login', component: HalamanLoginComponent },
  { path: 'halaman-utama', component: HalamanUtamaComponent },
];
