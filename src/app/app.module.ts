import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule }from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssignmentsComponent } from './assignments/assignments.component';
import { RenduDirective } from './shared/rendu.directive';
import { NonRenduDirective } from './shared/non-rendu.directive';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import  {MatToolbarModule} from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSelectModule } from '@angular/material/select';
import { AssignmentDetailComponent } from './assignments/assignment-detail/assignment-detail.component';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { AssignmentService } from './shared/assignment.service';
import { RouterModule, Routes } from '@angular/router';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { authGuard } from './shared/auth.guard';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { Form } from '@angular/forms';
import { LogAssignmentComponent } from './assignments/log-assignment/log-assignment.component';
import { logGuard } from './shared/log.guard';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {path: '', component: AssignmentsComponent},
  {path: 'home', component: AssignmentsComponent},
  {path: 'add', component: AddAssignmentComponent, canActivate:[authGuard]},
  {path: 'assignment/:id', component: AssignmentDetailComponent, canActivate:[logGuard]},
  {path: 'assignment/:id/edit', component: EditAssignmentComponent, canActivate:[authGuard]},
  {path: 'log', component: LogAssignmentComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent,
    RenduDirective,
    NonRenduDirective,
    AssignmentDetailComponent,
    AddAssignmentComponent,
    EditAssignmentComponent,
    LogAssignmentComponent,
    ToolbarComponent,
    SidenavComponent,


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatDividerModule,
    MatCardModule, MatFormFieldModule, MatInputModule,
    FormsModule, MatDatepickerModule, MatNativeDateModule, 
    MatToolbarModule,MatSidenavModule,MatSelectModule, MatListModule,MatCheckboxModule,
    RouterModule.forRoot(routes), MatSlideToggleModule,ReactiveFormsModule,HttpClientModule
  ],
  providers: [AssignmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
