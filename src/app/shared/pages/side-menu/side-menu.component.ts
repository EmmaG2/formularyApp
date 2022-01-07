import { Component } from '@angular/core';
import { menu } from 'app/shared/interface/menu.interface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
})
export class SideMenuComponent {
  templateMenu: menu[] = [
    {
      texto: 'Básicos',
      ruta: './template/basicos',
    },
    {
      texto: 'Dinámicos',
      ruta: './template/dinamicos',
    },
    {
      texto: 'Switches',
      ruta: './template/switches',
    },
  ];

  reactiveMenu: menu[] = [
    {
      texto: 'Básicos',
      ruta: './reactive/basicos',
    },
    {
      texto: 'Dinámicos',
      ruta: './reactive/dinamicos',
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches',
    },
  ];
}
