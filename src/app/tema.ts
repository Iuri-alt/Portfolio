import { Injectable } from '@angular/core';
import { PALETAS } from './dados';

@Injectable({ providedIn: 'root' })
export class Tema {
  constructor() {
    const salva = localStorage.getItem('iuri-pal');
    if (salva !== null) this.aplicar(+salva, false);
  }

  aplicar(i: number, salvar = true) {
    const p = PALETAS[i];
    if (!p) return;
    const raiz = document.documentElement.style;
    raiz.setProperty('--a', p.a);
    raiz.setProperty('--b', p.b);
    if (salvar) localStorage.setItem('iuri-pal', String(i));
  }
}