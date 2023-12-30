import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable,of } from 'rxjs';
import { LoggingService } from './logging.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  oponed = false;
  url = "http://localhost:8010/api/assignments";
  constructor(private logginService: LoggingService, private http:HttpClient ) { }
  
    
  getAssignments():Observable<Assignment[]>{
     return this.http.get<Assignment[]>(this.url)
    }

  addAssignment(assignment:Assignment):Observable<any>{
  
    return this.http.post(this.url,assignment);
  }

  updateAssignment(assignment:Assignment):Observable<any>{
    return this.http.put(this.url,assignment);
  }

  deletedAssignment(assignment:Assignment):Observable<any>{
    const deleteUrl = this.url+"/"+assignment._id;
    return this.http.delete(deleteUrl);
  }

  getAssignment(id:number):Observable<Assignment|any>{

    return this.http.get<Assignment>(this.url+"/"+id);
   
  } 
}
