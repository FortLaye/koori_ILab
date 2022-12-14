import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/_models/Service';
import { AllRequestService } from 'src/app/_services/all-request.service';

@Component({
  selector: 'app-nav-link-service',
  templateUrl: './nav-link-service.component.html',
  styleUrls: ['./nav-link-service.component.css']
})
export class NavLinkServiceComponent implements OnInit {

  //services: Service = new Service;
  services: Service[]=[];

  constructor(private AllRequest: AllRequestService) {}

  ngOnInit(): void {
    this.getAllService();
  }
  getAllService(){this.AllRequest.getAll("get/services").subscribe((data:any)=>{this.services=data})}

}
