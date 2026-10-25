import { Component } from '@angular/core';
import { Stars } from './stars/stars';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Marquee } from './marquee/marquee';
import { Sobre } from './sobre/sobre';
import { Stack } from './stack/stack';
import { Projetos } from './projetos/projetos';
import { Carreira } from './carreira/carreira';
import { Contato } from './contato/contato';

@Component({
  selector: 'app-root',
  imports: [Stars, Navbar, Hero, Marquee, Sobre, Stack, Projetos, Carreira, Contato],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}