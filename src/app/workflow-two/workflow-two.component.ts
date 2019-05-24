import { Component, OnInit } from '@angular/core';
import { WorkflowOneComponent } from '../workflow-one/workflow-one.component';
import { WorkflowTwoService } from '../workflow-two.service';

@Component({
  selector: 'app-workflow-two',
  templateUrl: './workflow-two.component.html',
  styleUrls: ['./workflow-two.component.scss']
})
export class WorkflowTwoComponent implements OnInit {

  activityCounter = false;
  documentCounter = false;

  phase = 1;

  constructor( public workflow: WorkflowTwoService ) { }

  changePhase(phaseNum: number){
    this.phase = phaseNum;
  }

  seeUrl(codeName: any){
    alert(codeName);
  }

  seeActivities(){
    this.activityCounter = true;
  }

  seeDocs(){
    this.documentCounter = true;
  }

  goBack(){
    this.activityCounter = false;
    this.documentCounter = false;
  }

  ngOnInit() {
  }

}
