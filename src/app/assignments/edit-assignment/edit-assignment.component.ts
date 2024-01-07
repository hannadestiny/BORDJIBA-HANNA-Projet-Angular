import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentService } from '../../shared/assignment.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent {
  titre = "Formulaire de modification d'un devoir";
  assignment :Assignment | any;
  

  constructor(private assignmentService: AssignmentService,
              private route : ActivatedRoute,
              private router : Router,) {
    this.assignmentService.oponed = false;
              }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')) ;
    this.assignmentService.getAssignment(id).subscribe(a => this.assignment = a);

    const nom = this.route.snapshot.queryParamMap.get('nom');
    const fragment = this.route.snapshot.fragment;
    console.log("Query Params : " + nom);
    console.log("Fragment : " + fragment);
  }


  onSave(event:any){
    event.preventDefault();
    
    this.assignmentService.updateAssignment(this.assignment).
    subscribe(message => {console.log(message); this.router.navigate(['listedit'])});
    
  }

  retour(){
    this.router.navigate(['/listedit']);
  }
}
