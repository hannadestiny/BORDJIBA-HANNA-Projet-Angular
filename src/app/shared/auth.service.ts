import { Injectable } from '@angular/core';
import { Log} from '../assignments/log-assignment/log.model';
import { Observable,of } from 'rxjs';
import { LoggingService } from './logging.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  loggedIn=false;
  isLoggedAdmin=false;

  log : Log[] = [
    {
      id:1,
      Username: 'David',
      Password: '123',
      fonction: 'admin',
    },
    {
      id:2,
      Username: 'Geraldine',
      Password: 'abc',
      fonction: 'user',
    },
    {
      id:3,
      Username: 'Mickael',
      Password: '456',
      fonction: 'admin',
    },
    {
      id:4,
      Username: 'Marie',
      Password: 'def',
      fonction: 'user',
    }
  ]

  idd : number | undefined;

  logIn(Username:string,Password:string){
    if (this.log.find((l) => l.Username === Username && l.Password === Password)){
      this.idd=this.log.find((l) => l.Username === Username && l.Password === Password)?.id;
      if (this.log.find((l) => l.id === this.idd)?.fonction==='admin'){this.isLoggedAdmin=true;}
      this.loggedIn=true;
    }
    else{
      this.loggedIn=false;
    }
    return this.loggedIn;
    
  }

  logOut(){
    this.loggedIn=false;
  }

  isAdmin(){
    const isUserAdmin =new Promise(
      (resolve, reject) =>{
        resolve(this.loggedIn&&this.log.find((l) => l.id === this.idd)?.fonction==='admin')

      }
    );
    return isUserAdmin;
  }
  
  isLogged(){
    const isUser =new Promise(
      (resolve, reject) =>{
            resolve(this.loggedIn)
      }
    );
    return isUser;
  }
}