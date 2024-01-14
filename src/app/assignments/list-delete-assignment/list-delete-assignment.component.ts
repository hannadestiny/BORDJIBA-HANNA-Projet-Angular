import { Component, ViewChild } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-delete-assignment',
  templateUrl: './list-delete-assignment.component.html',
  styleUrls: ['./list-delete-assignment.component.css']
})
export class ListDeleteAssignmentComponent {
  assignments: Assignment[] = []; 
  dataSource: any;

  constructor (private assignmentsService:AssignmentService, private rout:Router ){
    this.assignmentsService.oponed = false;
  }


  ngOnInit() {
    this.getAssignments();
  }

  po:Assignment[] = [];
  getAssignments()
  {

    this.assignmentsService.getAssignments()
    .subscribe((assignments) => {
      this.assignments=assignments;
      this.po=this.assignments  ;
      this.dataSource = new MatTableDataSource(this.po);
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource);
    });
  }
  displayedColumns: string[] = ['position', 'name','matiere','nomProf', 'dateDeRendu', 'nomAuteur','rendu'];
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

}
