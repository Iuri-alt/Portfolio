import { Component, ElementRef, NgZone, OnDestroy, AfterViewInit, ViewChild, inject } from '@angular/core';

interface Estrela { x: number; y: number; z: number; p: number; }
interface Cadente { x: number; y: number; l: number; }

@Component({ selector: 'app-stars', templateUrl: './stars.html', styleUrl: './stars.css' })
export class Stars implements AfterViewInit, OnDestroy {
  @ViewChild('tela', { static: true }) tela!: ElementRef<HTMLCanvasElement>;
  @ViewChild('brilho', { static: true }) brilho!: ElementRef<HTMLDivElement>;
  private zone = inject(NgZone);
  private raf = 0;
  private limpar?: () => void;

  ngAfterViewInit() { this.zone.runOutsideAngular(() => this.iniciar()); }
  ngOnDestroy() { cancelAnimationFrame(this.raf); this.limpar?.(); }

  private iniciar() {
    const cv = this.tela.nativeElement;
    const ctx = cv.getContext('2d')!;
    const brilho = this.brilho.nativeElement;
    let W = 0, H = 0, mx = 0, my = 0, f = 0;
    let estrelas: Estrela[] = [];
    let cadentes: Cadente[] = [];

    const medir = () => {
      W = cv.width = innerWidth;
      H = cv.height = innerHeight;
      estrelas = Array.from({ length: Math.round(W * H / 5500) }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        z: Math.random() + .2, p: Math.random() * 6,
      }));
    };
    const mover = (e: MouseEvent) => {
      mx = e.clientX / W - .5;
      my = e.clientY / H - .5;
      brilho.style.transform = 'translate(' + e.clientX + 'px,' + e.clientY + 'px)';
    };
    medir();
    addEventListener('resize', medir);
    addEventListener('mousemove', mover);
    this.limpar = () => {
      removeEventListener('resize', medir);
      removeEventListener('mousemove', mover);
    };

    const desenhar = () => {
      f++;
      ctx.clearRect(0, 0, W, H);
      for (const s of estrelas) {
        const x = (s.x - mx * 40 * s.z + W) % W;
        const y = (s.y - my * 40 * s.z + H) % H;
        ctx.globalAlpha = .35 + .65 * Math.abs(Math.sin(f / 60 + s.p));
        ctx.fillStyle = '#fff';
        ctx.fillRect(x, y, s.z * 1.6, s.z * 1.6);
      }
      if (Math.random() < .008) cadentes.push({ x: Math.random() * W, y: Math.random() * H * .5, l: 0 });
      cadentes = cadentes.filter(c => c.l < 60);
      for (const c of cadentes) {
        c.l++; c.x += 12; c.y += 6;
        ctx.globalAlpha = 1 - c.l / 60;
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x - 80, c.y - 40);
        ctx.stroke();
      }
      this.raf = requestAnimationFrame(desenhar);
    };
    desenhar();
  }
}