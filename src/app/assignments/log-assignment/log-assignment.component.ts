import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-log-assignment',
  templateUrl: './log-assignment.component.html',
  styleUrls: ['./log-assignment.component.css']
})
export class LogAssignmentComponent {
  username: any;
  password: any;
  user: any;

  form :FormGroup=this.fb.group({
    Username:['',Validators.required],
    Password:['',Validators.required]
  });

  constructor(private authService : AuthService, private fb: FormBuilder, private router:Router){ }
    ngOnInit(): void {
    }

    titre = "Veuillez vous connecter!!";

    login(){
      let user= this.authService.logIn(this.form.value.Username,this.form.value.Password);
      if (!user){
        console.log("non connecte");
      }
      else{
        console.log(" connecte");
      }

      this.router.navigate(['home']);
      
    }
}
