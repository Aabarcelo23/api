import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
//import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-page',
  templateUrl: './page.page.html',
  styleUrls: ['./page.page.scss'],
})
export class PagePage implements OnInit{
  slideOpt = {
    initialSlide: 0,//slide inicial
    slidesPerView:1,//slide por vista
    centeredSlides:true,//los slides esten centrados
    speed:400//velocidad de transicion de cada slide en milisegundo
  }

   slides = [
    {

    tittle:"BIENVENIDO A AppI",
    subtittle:"Despierta tus sentidos!",
    img:"assets/image/appi2.JPG",
    description:"Disfruta de la buena musica",
    icon:"play-circle-outline",

    },

    {

      tittle:"INICIO",
      subtittle:"Lo mejor del dia!",
      img:"assets/image/idilio.jpg",
      description2:"Solo me alienta el deseo divino de hacerte mía Mas me destruye la incertidumbre…",
      icon2:"musical-notes-outline",
      genero:"Romance",

  
    },

      {

        tittle:"MUSICA NUEVA!",
        subtittle:"-Album destacado-",
        img:"assets/image/devuel.jpg",
        description2:"De vuelta pa' la vuelta Voy a amarrar a to'a la' que anden suelta'",
        icon2:"musical-notes-outline",
        genero:"Salsa-Reggaeton",
    
        },

        {

          tittle:"ENCUENTRA TU ESTILO!",
          subtittle:"-Generos-",
          img:"assets/image/ritmos.jpg",
          description2:"Nueva music prende corazones..Estas nuevas canciones explotaran tus emociones.",
          icon2:"musical-notes-outline",
          genero:"Exitos del 2022!",
      
          },

   ]

  constructor(private router: Router, private storage: Storage) {
    this.storage.create();
   }

   ngOnInit(): void {
     this.showe().then(x =>{
      if (x){
        this.router.navigateByUrl("/page")//modifique aqui para que no se redirigiera enseguida al homee
      }
     })
   }

   async showe(){

    const show = await this.storage.get("isIntroShowed")
    return show;


   }

  finish(){
    this.storage.set("isIntroShowed",true);
    this.router.navigateByUrl("/home");

  }
}
