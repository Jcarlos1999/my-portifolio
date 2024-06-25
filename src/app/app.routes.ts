import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [
  { path: '', component: MenuComponent, title: 'Menu' },
  { path: 'menu', component: MenuComponent, title: 'Menu' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'contatos', component: ContatoComponent, title: 'Contato'}
];
