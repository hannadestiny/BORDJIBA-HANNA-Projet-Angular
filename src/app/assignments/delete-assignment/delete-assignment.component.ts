import { Component } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-delete-assignment',
  templateUrl: './delete-assignment.component.html',
  styleUrls: ['./delete-assignment.component.css']
})
export class DeleteAssignmentComponent {
  assignmentTransmis: Assignment | any;
  check:boolean = false;
  

  constructor(private assignmentService: AssignmentService,
              private route: ActivatedRoute,
              private router : Router){
              this.assignmentService.oponed = false;
                
              }

   ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')) ;
    this.assignmentService.getAssignment(id).subscribe(a => this.assignmentTransmis = a);
  }
  onDelete(){
    
    this.assignmentService.deletedAssignment(this.assignmentTransmis!).subscribe(message => {console.log(message);this.router.navigate(['home'])});
  } 

  retour(){
    this.router.navigate(['home']);
  }
}
