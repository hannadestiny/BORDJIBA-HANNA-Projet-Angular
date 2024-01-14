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
  status: string = 'tous';

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
    
    
    if (filterValue.trim().toLowerCase() == "rendu") {
      this.dataSource.filter = "true";
    }
    if (filterValue.trim().toLowerCase() == "non rendu") {
      this.dataSource.filter = "false";
    }
    
  }

  applyFilter1(event: Event) {
   
    if (this.status === 'tous') {
      this.dataSource.filter = '';
    } else {
      this.dataSource.filter = this.status === 'true' ? 'true' : 'false';
    }

  }
}