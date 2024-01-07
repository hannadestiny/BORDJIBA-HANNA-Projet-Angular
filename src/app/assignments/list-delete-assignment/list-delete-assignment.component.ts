import { Component } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentService } from 'src/app/shared/assignment.service';

@Component({
  selector: 'app-list-delete-assignment',
  templateUrl: './list-delete-assignment.component.html',
  styleUrls: ['./list-delete-assignment.component.css']
})
export class ListDeleteAssignmentComponent {
  assignments: Assignment[] = []; 

  constructor (private assignmentsService:AssignmentService ){
    this.assignmentsService.oponed = false;
  }


  ngOnInit() {
    this.getAssignments();
  }

  getAssignments()
  {

    this.assignmentsService.getAssignments()
    .subscribe((assignments) => this.assignments=assignments);
  }

}
