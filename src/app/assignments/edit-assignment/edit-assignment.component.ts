import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentService } from '../../shared/assignment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent {
  assignment :Assignment | any;

  titre = "Formulaire d'ajout de devoir";
  assignmentForm: any;
  
  

  constructor(private assignmentService: AssignmentService,
              private route : ActivatedRoute,
              private authService : AuthService,
              private router : Router,
              private _formBuilder: FormBuilder) {
    this.assignmentService.oponed = false;
              }



  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id')) ;
    this.assignmentService.getAssignment(id).subscribe(a => this.assignment = a);

    this.assignmentForm = new FormGroup({
      nomDevoir: new FormControl(),
      matiere: new FormControl(),
      dateDeRendu: new FormControl(),
      auteur: new FormControl(),
      remarque: new FormControl(),
      note: new FormControl(),
    });

    // Set the initial form values
    this.assignmentForm.patchValue(this.assignment);
  
  }



  isAdmin(){
  
    return this.authService.isAdmmin();
  }  


  onSave(event:any){
   

    if (this.assignment.matiere === "Angular") {
      this.assignment.nomProf = "M. Buffa";
    } else if (this.assignment.matiere === "Management") {
      this.assignment.nomProf= "M. Tounsi";
    } else if (this.assignment.matiere === "Statistique") {
      this.assignment.nomProf = "M. Donati";
    } else if (this.assignment.matiere === "Java") {
      this.assignment.nomProf = "M. Lahire";
    }else if(this.assignment.matiere === "OIB"){
      this.assignment.nomProf = "Mme. Mirbel";
    }

    if (this.assignment.note !== undefined && this.assignment.note >= 0 && this.assignment.note <= 20 && this.assignment.note !== null && !isNaN(this.assignment.note) ) {
      this.assignment.rendu = true;
    } else {
      this.assignment.rendu= false;}
      
    this.assignmentService.updateAssignment(this.assignment).
    subscribe(message => {console.log(message); this.router.navigate(['listedit'])});
    
  }


  retour(){
    this.router.navigate(['/listedit']);
  }

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  sixthFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
}
