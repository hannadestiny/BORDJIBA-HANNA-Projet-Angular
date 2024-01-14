import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { AssignmentService } from '../shared/assignment.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  constructor(private authService: AuthService, private router: Router, private assignment : AssignmentService) {
    
   }

  fal()
  {
    this.assignment.oponed = false;
  }
  isLogged(){
    return this.authService.loggedIn;
  }

  oponed(){
    this.assignment.oponed = !this.assignment.oponed;
  }
  oponed1(){
    this.assignment.oponed = false;
  }

  logout(){
    
    this.assignment.oponed = false;
    if(this.authService.loggedIn)
    {
      this.authService.logOut();
      this.router.navigate(['home']);
      console.log("deconnecte");
    } else{
      this.router.navigate(['home']);
    }
    
  
  }

  ho()
  {
    this.router.navigate(['home']);
  }
}
