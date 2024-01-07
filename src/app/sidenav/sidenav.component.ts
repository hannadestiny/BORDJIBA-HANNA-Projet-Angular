import { Component } from '@angular/core';
import { AssignmentService } from '../shared/assignment.service';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { Assignment } from '../assignments/assignment.model';



@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})


export class SidenavComponent {

  
  oponed = false;
  log =false;
  
  assignments: Assignment[] = []; 

  constructor (private assignmentsService:AssignmentService,
              private authService : AuthService,private router :Router){
                
       
  }

  
  isOponed(){
    this.oponed=this.assignmentsService.oponed;
    return this.oponed;
  }

  ngOnInit() {
    this.getAssignments();
  }

  getAssignments()
  {

    this.assignmentsService.getAssignments()
    .subscribe((assignments) => this.assignments=assignments);
  }


  fal()
  {
    this.oponed = false;

  }
}
