import { Component, OnInit, enableProdMode } from '@angular/core';

import { Service, Task, Dependency, Resource, ResourceAssignment } from '../../../../service/administraractividades.service';

@Component({
  selector: 'app-administraracividades',
  templateUrl: './administraracividades.component.html',
  styleUrls: ['./administraracividades.component.css']
})
export class AdministraracividadesComponent implements OnInit {

  tasks: Task[];
    dependencies: Dependency[];
    resources: Resource[];
    resourceAssignments: ResourceAssignment[];

    constructor(service: Service) {
        this.tasks = service.getTasks();
        this.dependencies = service.getDependencies();
        this.resources = service.getResources();
        this.resourceAssignments = service.getResourceAssignments();
    }

  ngOnInit() {
  }

}
