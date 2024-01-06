import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentService } from '../../shared/assignment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
 
  assignmentTransmis: Assignment | any;
  check:boolean = false;
  note: number | undefined;   
  

  constructor(private assignmentService: AssignmentService,
              private route : ActivatedRoute,
              private router : Router,
              private authService : AuthService) {
              this.assignmentService.oponed = false;
                
              }


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')) ;
    this.assignmentService.getAssignment(id).subscribe(a => this.assignmentTransmis = a);
  }

  onAssignmentRendu() {
    this.assignmentTransmis!.rendu = true;
    this.assignmentTransmis!.note = this.note;


    this.assignmentService.updateAssignment(this.assignmentTransmis!)
    .subscribe(message => {console.log(message);this.router.navigate(['assignment',this.assignmentTransmis!.id])});
    this.check=false;

  }


  onDelete(){
    
    this.assignmentService.deletedAssignment(this.assignmentTransmis!).subscribe(message => {console.log(message);this.router.navigate(['home'])});
  } 
  
  onEdit(){ 
    this.router.navigate(['assignment',this.assignmentTransmis!.id,'edit'],{
      queryParams : {nom : this.assignmentTransmis!.nom},
      fragment : 'edition'
    });
    
  }
  
  notess(){
    if (this.note != undefined && this.note >= 0 && this.note <= 20 && this.note != null) {
      return true;
    }
    return false;
  }

  isAdmin(){
    return this.authService.isAdmin;
  }
}
