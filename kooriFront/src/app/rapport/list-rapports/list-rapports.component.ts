import {Component,  OnInit} from '@angular/core';
import * as $ from 'jquery';
import {Service} from "../../_models/Service";
import {AllRequestService} from "../../_services/all-request.service";
import {Rapport} from "../../_models/rapport";
import {Evaluation_note} from "../../_models/evaluation_note";
import {SenddataService} from "../../_services/senddata.service";
@Component({
  selector: 'app-list-rapports',
  templateUrl: './list-rapports.component.html',
  styleUrls: ['./list-rapports.component.css']
})
export class ListRapportsComponent implements OnInit {
  rapportByUser: Rapport[] = []
  constructor(private allRequest: AllRequestService, private sendData: SenddataService) { }
  services : Service[] = []
  searchByTitle: string='';
  searchByService: string='';
  key:string = '';

  ngOnInit(): void {
    this.allRequest.receiveNotification().subscribe((evaluationNote:Evaluation_note)=>{

      this.rapportByUser.forEach(r=>{
        if (r.id === evaluationNote.RapportId){
          r.isEvaluated = true;
        }
      })
    })
    this.sendData.receiveData().subscribe(d=>{
      this.searchByService= d;
    })

    this.getRapportByUser();

    $(function (){
      $('#search-dropdown li').on('click',function(){
        console.log($(this).text())
        $('#search-btn').html($(this).text());
        return false;
      });
    })
    this.getServices();
  }
  getServices(){
    this.allRequest.getAll("get/services",).subscribe((data:any)=>{
      this.services = data.map((service:Service)=> new Service().deserialize(service))
    })
  }

  getRapportByUser(){
    this.allRequest.getAll("get/user/4/rapports",).subscribe( (data:any)=>{
      this.rapportByUser = data.map((rapport:Rapport)=> new Rapport().deserialize(rapport))
      this.rapportByUser.forEach(r => {
        console.log(r)
        this.allRequest.getById('get/evaluation_note/user/4/', r.id).subscribe((data: any) => {
          if (data) {
            r.isEvaluated = true;
          }
        });
      })
    })
  }


  selectedValue(event: any) {
    this.searchByService = event.target.value;
  }
}
