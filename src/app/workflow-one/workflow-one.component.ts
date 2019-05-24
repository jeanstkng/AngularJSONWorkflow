import { Component, OnInit } from '@angular/core';
import { WorkflowServiceService } from '../workflow-service.service';

@Component({
  selector: 'app-workflow-one',
  templateUrl: './workflow-one.component.html',
  styleUrls: ['./workflow-one.component.scss']
})
export class WorkflowOneComponent implements OnInit {

  constructor(public workflow: WorkflowServiceService) { 

  }

  seeUrl(codeName: any){
    alert(codeName);
  }

  ngOnInit() {

  }


}
