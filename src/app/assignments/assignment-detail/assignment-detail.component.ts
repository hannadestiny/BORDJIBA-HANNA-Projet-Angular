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


  ondelete(){
    this.router.navigate(['assignment',this.assignmentTransmis!.id,'delete']);
  }
  
  onedit(){
    this.router.navigate(['assignment',this.assignmentTransmis!.id,'edit']);
  }
  
  notess(){
    if (this.note !== undefined && this.note >= 0 && this.note <= 20 && this.note !== null && !isNaN(this.note) ) {
      return true;
    } else {
    return false;}
  }

  isAdmin(){
  
    return this.authService.isAdmmin();
  }

  isLogged(){
    console.log(this.authService.isConnect());
    
    return this.authService.isConnect();

  }
  retour(){
    this.router.navigate(['list']);
  }

  donati()
  {
    return this.assignmentTransmis.nomProf === "M. Donati";
  }

  buffa()
  {
    return this.assignmentTransmis.nomProf === "M. Buffa";
  }

  tounsi()
  {
    return this.assignmentTransmis.nomProf === "M. Tounsi";
  }

  lahire()
  {
    return this.assignmentTransmis.nomProf === "M. Lahire";
  }

  mirbel()
  {
    return this.assignmentTransmis.nomProf === "Mme. Mirbel";
  }
}
