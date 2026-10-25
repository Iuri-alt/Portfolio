import { Component } from '@angular/core';
import { CONTATOS } from '../dados';
import { Revelar } from '../revelar';

@Component({ selector: 'app-contato', imports: [Revelar], templateUrl: './contato.html', styleUrl: './contato.css' })
export class Contato {
  contatos = CONTATOS;
}