import { Component, EventEmitter,OnInit, Output, Input } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { Route, Router } from '@angular/router';
import * as e from 'express';
import { AuthService } from 'src/app/shared/auth.service';


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
  matiere: string = "";
  remarque: string = "";
  nomProf: string = "";
  
  
  
    constructor(private assignmentService : AssignmentService, private router :Router, private authService : AuthService){
      this.assignmentService.oponed = false;
        
    }

    nomAuteur = this.authService.Usernamee();
    
   onSubmit(event: any) {
    if (this.matiere === "Angular") {
      this.nomProf = "M. Buffa";
    } else if (this.matiere === "Management") {
      this.nomProf= "M. Tounssi";
    } else if (this.matiere === "Statistique") {
      this.nomProf = "M. Donati";
    } else if (this.matiere === "Java") {
      this.nomProf = "M. Lahire";
    }else{
      this.nomProf = "";
    }
    
    event.preventDefault();
    const newAssignment = new Assignment();
    newAssignment.id=Math.floor(Math.random() * 1000);
    newAssignment.nomDevoir= this.nomDevoir;
    newAssignment.dateDeRendu = this.dateDeRendu;
    newAssignment.matiere = this.matiere;
    newAssignment.auteur = this.nomAuteur;
    newAssignment.note = 0;
    newAssignment.remarque = this.remarque;
    newAssignment.rendu = false;
    newAssignment.nomProf = this.nomProf;
    
    this.assignmentService.addAssignment(newAssignment).subscribe(message => {console.log(message);this.router.navigate(['list'])});
    

  }

  retour(){
    this.router.navigate(['/list']);
  }

}
