import { Component, inject } from '@angular/core';
import { PALETAS } from '../dados';
import { Tema } from '../tema';

@Component({ selector: 'app-navbar', templateUrl: './navbar.html', styleUrl: './navbar.css' })
export class Navbar {
  tema = inject(Tema);
  paletas = PALETAS;
}
