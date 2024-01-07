import { Component } from '@angular/core';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-list-edit-assignment',
  templateUrl: './list-edit-assignment.component.html',
  styleUrls: ['./list-edit-assignment.component.css']
})
export class ListEditAssignmentComponent {

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
