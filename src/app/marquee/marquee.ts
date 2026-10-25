import { Component } from '@angular/core';
import { TECNOLOGIAS } from '../dados';

@Component({ selector: 'app-marquee', templateUrl: './marquee.html', styleUrl: './marquee.css' })
export class Marquee {
  itens = [...TECNOLOGIAS, ...TECNOLOGIAS];
}