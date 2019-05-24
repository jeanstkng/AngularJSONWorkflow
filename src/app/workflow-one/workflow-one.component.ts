import { Component, OnInit } from '@angular/core';
import { WorkflowServiceService } from '../workflow-service.service';

@Component({
  selector: 'app-workflow-one',
  templateUrl: './workflow-one.component.html',
  styleUrls: ['./workflow-one.component.scss']
})
export class WorkflowOneComponent implements OnInit {

  activityCounter = false;
  documentCounter = false;

  phase = 1;

  constructor(public workflow: WorkflowServiceService) { 

  }

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
