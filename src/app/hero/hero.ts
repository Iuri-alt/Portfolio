import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { CARGOS } from '../dados';

interface Chip { label: string; x: string; y: string; }
interface Anel { inset: string; dur: string; dir: string; rdir: string; chips: Chip[]; }

function posicionar(labels: string[], desvio: number): Chip[] {
  return labels.map((label, i) => {
    const ang = (i / labels.length) * Math.PI * 2 + desvio;
    return { label, x: (50 + 50 * Math.cos(ang)) + '%', y: (50 + 50 * Math.sin(ang)) + '%' };
  });
}

@Component({ selector: 'app-hero', templateUrl: './hero.html', styleUrl: './hero.css' })
export class Hero implements OnInit, OnDestroy {
  digitado = signal('');

  aneis: Anel[] = [
    { inset: '8%',  dur: '48s', dir: 'normal',  rdir: 'reverse', chips: posicionar(['FastAPI', 'Flutter', 'SQL', 'Angular'], 0) },
    { inset: '20%', dur: '34s', dir: 'reverse', rdir: 'normal',  chips: posicionar(['Python', 'Git', 'IA'], 1) },
    { inset: '2%',  dur: '70s', dir: 'normal',  rdir: 'reverse', chips: posicionar(['TypeScript', 'Linux'], 2.4) },
  ];

  private i = 0;
  private c = 0;
  private apagando = false;
  private t: any;

  ngOnInit() { this.passo(); }
  ngOnDestroy() { clearTimeout(this.t); }

  private passo = () => {
    const palavra = CARGOS[this.i];
    this.c += this.apagando ? -1 : 1;
    this.digitado.set(palavra.slice(0, this.c));
    let espera = this.apagando ? 35 : 70;
    if (!this.apagando && this.c === palavra.length) { this.apagando = true; espera = 1600; }
    else if (this.apagando && this.c === 0) {
      this.apagando = false;
      this.i = (this.i + 1) % CARGOS.length;
      espera = 300;
    }
    this.t = setTimeout(this.passo, espera);
  };
}