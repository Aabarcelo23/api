import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private storage:Storage) { 
    this.storage.create();
  }

  loginUser(credentials){
    
    return new Promise((accept, reject)=>{
      if(
        credentials.email == "maran230216@hotmail.com" && credentials.password == "23021620"
      ){
        accept("Login Exitoso");
      }else{
        reject("Login Fallido")
      }
      this.storage.get("user").then((data) => {
        if (
          credentials.email == data.email && 
          credentials.password == data.password
        ) {
          accept("Login Exitoso");
        } else {
          reject("Login Fallido");
        }

      });

    });
  }
  registerUser(userData){
    userData.password = btoa(userData.password);
    //atoa() funcion para desencriptar
    return this.storage.set("user", userData)

  }

}
   