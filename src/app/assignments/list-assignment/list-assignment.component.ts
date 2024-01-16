import { Component, ViewChild } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentService } from 'src/app/shared/assignment.service';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Route, Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-list-assignment',
  templateUrl: './list-assignment.component.html',
  styleUrls: ['./list-assignment.component.css']
})
export class ListAssignmentComponent {
  assignments: Assignment[] = []; 
  dataSource: any;
  status: string = 'tous';
mat: any;

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

  applyFilter2(event: Event) {
   
    if (this.mat === 'tous') {
      this.dataSource.filter = '';
    } else  if (this.mat === 'Angular') {
      this.dataSource.filter = 'Angular';
    } else  if (this.mat === 'Java') {
      this.dataSource.filter = 'Java';
    } else  if (this.mat === 'Management') {
      this.dataSource.filter = 'Management';
    } else  if (this.mat === 'OIB') {
      this.dataSource.filter = 'OIB';
    } else if (this.mat === 'Statistique') {
      this.dataSource.filter = 'Statistique';
    }

  }
}
  

