import { Component, OnInit } from '@angular/core';
import {AllRequestService} from "../_services/all-request.service";
import {Rapport} from "../_models/rapport";
import {Service} from "../_models/service";

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss']
})
export class RapportComponent implements OnInit {
  rapports : Rapport[] = []
  services : Service[] = []
  searchByService: string='';

  constructor(private allRequest: AllRequestService) { }

  ngOnInit(): void {
    this.getRapports()
    this.getServices()
  }
  getRapports(){
  
    
    this.allRequest.getAll('get/rapports').subscribe((data:any)=>{
      this.rapports = data.map((rapport:Rapport)=> new Rapport().deserialize(rapport))
      console.log(this.rapports)
    })
  }

  getServices(){
    this.allRequest.getAll("get/services",).subscribe((data:any)=>{
      this.services = data.map((service:Service)=> new Service().deserialize(service))
    })
  }

  selectedValue(event: any) {
    this.searchByService = event.target.value;
  }

}
