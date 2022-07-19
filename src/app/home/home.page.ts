import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpt = {
    initialSlide: 0,//slide inicial
    slidesPerView:1,//slide por vista
    centeredSlides:true,//los slides esten centrados
    speed:400//velocidad de transicion de cada slide en milisegundo
  }

  constructor() {}

}
