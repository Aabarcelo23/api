import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  constructor(private storage:Storage) { 
  this.storage.create();
  }
  
  loginUser(credentials) { 
    return new Promise((accept, reject) => {
      this.storage.get("user").then((data) => {      //CONTRASEÑA ENCRIPTADA
        if (
          credentials.email == data.email && credentials.password == atob(data.password)
        ) {
          accept("Login Exitoso");
        } else {
          reject("Login Fallido");
        }

      

      }).catch( err => {
        return reject("Fallo en el login")
      }); 
    });
  }
  registerUser(userData){                            //CONTRASEÑA DESENCRIPTADA 
    userData.password = btoa(userData.password);
    return this.storage.set("user", userData)
  }
}