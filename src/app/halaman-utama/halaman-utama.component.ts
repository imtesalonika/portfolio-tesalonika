  import { Component } from '@angular/core';
  import {NavbarComponent} from "../navbar/navbar.component";

  @Component({
    selector: 'app-halaman-utama',
    standalone: true,
    imports: [
      NavbarComponent
    ],
    templateUrl: './halaman-utama.component.html',
    styleUrl: './halaman-utama.component.css'
  })
  export class HalamanUtamaComponent {

  }
