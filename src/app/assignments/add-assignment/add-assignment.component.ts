import { Component, EventEmitter,OnInit, Output, Input } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { Route, Router } from '@angular/router';
import * as e from 'express';


@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent {
  a : Assignment | undefined;
  titre = "Formulaire d'ajout de devoir";
  nomDevoir:string="";
  dateDeRendu:Date= new Date();
  
    constructor(private assignmentService : AssignmentService, private router :Router){
      this.assignmentService.oponed = false;
        
    }

    
   onSubmit(event: any) {
    
    event.preventDefault();
    const newAssignment = new Assignment();
    newAssignment.id=Math.floor(Math.random() * 1000);
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.rendu = false;
    
    this.assignmentService.addAssignment(newAssignment).subscribe(message => console.log(message));
    //this.router.navigate(['home']);

  }

}
