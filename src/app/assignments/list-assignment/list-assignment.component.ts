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
  mat: string='tous';
  filterValue: string = '';

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

  applyGlobalFilter() {
    this.dataSource.filterPredicate = (data: Assignment, filter: string): boolean => {
      const searchString = JSON.parse(filter);
      const matchFilter = [];
 
      const inputMatch = data.nomDevoir.toLowerCase().includes(searchString.input.toLowerCase());

      const matMatch = searchString.mat === 'tous' || data.matiere === searchString.mat;

      const statusMatch = searchString.status === 'tous' || (data.rendu.toString() === searchString.status);
 
      matchFilter.push(inputMatch);
      matchFilter.push(matMatch);
      matchFilter.push(statusMatch);
 
      return matchFilter.every(Boolean);
    };
 
    this.dataSource.filter = JSON.stringify({input: this.filterValue, mat: this.mat, status: this.status});
  }
  
  
  applyFilter(event: Event) {
    this.filterValue = (event.target as HTMLInputElement).value;
    
    this.applyGlobalFilter();
  }

  applyFilter1(event: Event) {
    this.applyGlobalFilter();
  }
 
  applyFilter2(event: Event) {
    this.applyGlobalFilter();
  }
   
}
  

