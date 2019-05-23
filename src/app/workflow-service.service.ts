import { Injectable } from '@angular/core';
import { JSONWorkflows, Phases, Design, Activity, ValidationRegLaunch, Documents } from './interfaces/workflows.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkflowServiceService {

  workflows: JSONWorkflows;
  phase: Phases;
  design: Design;
  activities: Activity;
  vrl: ValidationRegLaunch;
  docs: Documents;

  constructor(private http: HttpClient) { 

    this.loadInfo();

  }

  private loadInfo() {

    this.http.get('assets/data/json_workflows.json')
      .subscribe( (resp: JSONWorkflows) => {

        this.workflows = resp;

        //  console.log(resp);

      });

   }
}
