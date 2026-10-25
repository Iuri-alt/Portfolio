import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

@Directive({ selector: '[revelar]' })
export class Revelar implements OnInit, OnDestroy {
  private el = inject(ElementRef).nativeElement as HTMLElement;
  private io?: IntersectionObserver;

  ngOnInit() {
    const s = this.el.style;
    s.opacity = '0';
    s.transform = 'translateY(36px)';
    s.transition = 'opacity .8s ease, transform .8s ease';
    this.io = new IntersectionObserver((es) => {
      if (es[0].isIntersecting) {
        s.opacity = '1';
        s.transform = '';
        this.io?.disconnect();
      }
    }, { threshold: 0.08 });
    this.io.observe(this.el);
  }

  ngOnDestroy() { this.io?.disconnect(); }
}