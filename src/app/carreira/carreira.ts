import { Component } from '@angular/core';
import { FORMACAO, TAREFAS } from '../dados';
import { Revelar } from '../revelar';

@Component({ selector: 'app-carreira', imports: [Revelar], templateUrl: './carreira.html', styleUrl: './carreira.css' })
export class Carreira {
  tarefas = TAREFAS;
  formacao = FORMACAO;
}
