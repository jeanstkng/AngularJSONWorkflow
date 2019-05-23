import { Component, OnInit } from '@angular/core';
import { WorkflowServiceService } from '../workflow-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public _worktest: WorkflowServiceService) { }

  ngOnInit() {
  }

}
