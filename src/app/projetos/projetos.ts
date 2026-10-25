import { Component } from '@angular/core';
import { PROJETOS } from '../dados';
import { Revelar } from '../revelar';

@Component({ selector: 'app-projetos', imports: [Revelar], templateUrl: './projetos.html', styleUrl: './projetos.css' })
export class Projetos {
  projetos = PROJETOS;

  mover(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    el.style.transition = 'transform .05s';
    el.style.transform = 'perspective(900px) rotateY(' + x * 10 + 'deg) rotateX(' + (-y * 10) + 'deg) translateY(-6px)';
  }

  sair(e: MouseEvent) {
    const el = e.currentTarget as HTMLElement;
    el.style.transition = 'transform .4s';
    el.style.transform = '';
  }
}