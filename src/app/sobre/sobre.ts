import { Component } from '@angular/core';
import { STATS } from '../dados';
import { Revelar } from '../revelar';

@Component({ selector: 'app-sobre', imports: [Revelar], templateUrl: './sobre.html', styleUrl: './sobre.css' })
export class Sobre {
  stats = STATS;
}