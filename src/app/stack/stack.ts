import { Component } from '@angular/core';
import { STACK } from '../dados';
import { Revelar } from '../revelar';

@Component({ selector: 'app-stack', imports: [Revelar], templateUrl: './stack.html', styleUrl: './stack.css' })
export class Stack {
  grupos = STACK;
}