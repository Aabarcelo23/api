import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import { AuthenticateService } from '../services/authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

                             // VALIDATORS

  registerForm: FormGroup;
  validation_messages = {
    nombre: [
      { type: "required", message: "Este campo es obligatorio" },
  
    ],

    apellido: [
      { type: "required", message: "Este campo es obligatorio" },
  
    ],
          
    email: [
      { type: "required", message: "Este campo es obligatorio" },
      { type: "pattern", message: "El email no es valido" }
    ],

    password:[
      {type:"required", message:"Este campo es obligatorio"}, //validation_messages para password agregado!
      {type:"minlength", message:"Contraseña invalida"}
    ]
  };
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private storage:Storage,
    private authService: AuthenticateService
  ) {
    this.registerForm = this.formBuilder.group({
      nombre: new FormControl(
        "",
        Validators.compose([
          Validators.required,
        ])
      ),
      apellido: new FormControl(
        "",
        Validators.compose([
          Validators.required,

        ])
      ),

      email: new FormControl(
        "",
        Validators.compose([  
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-]+$")
        ])
      ),
      password: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])
      )
    });
   }
  ngOnInit() {
  }

  register(registerFormValues){
  this.authService.registerUser(registerFormValues).then(()=>{
this.navCtrl.navigateBack("/login")

});

  }
  goToLogin(){
    this.navCtrl.navigateBack("/login")
  }
} 