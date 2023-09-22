import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  constructor() { }

  ngOnInit() {
    this.openPanel(0);
  }

  openPanel(index: number) {


    this.accordionItems.forEach((item, i) => {

      //item.isOpen = i === index
      item.isOpen = !item.isOpen
    });
  }

  accordionItems: Array<{
    isOpen: boolean;
    header: string;
    body: string;
  }> = [
    {
      isOpen: true,
      header: 'Inicio',
      body: 'Contenido de Inicio'
    },
    {
      isOpen: false,
      header: 'Eje 1',
      body: 'Contenido de Eje 1'
    },
    {
      isOpen: false,
      header: 'Eje 2',
      body: 'Contenido de Eje 2'
    },
    {
      isOpen: false,
      header: 'Eje 3',
      body: 'Contenido de Eje 3'
    },
    {
      isOpen: false,
      header: 'Eje 4',
      body: 'Contenido de Eje 4'
    },
    {
      isOpen: false,
      header: 'Cierre',
      body: 'Contenido de Cierre'
    }
  ];

}


