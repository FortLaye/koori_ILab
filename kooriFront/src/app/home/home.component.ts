import {Component, OnInit} from '@angular/core';
import {AllRequestService} from "../_services/all-request.service";
import {Koori} from "../_models/koori";
import {Ibox} from "../_models/ibox";
import {Service} from "../_models/Service";
import {Temoignage} from "../_models/Temoignage";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  temoignages: Temoignage[] = []
  koori: Koori = new Koori;
  ibox: Ibox = new Ibox;
  services: Service[] = [];

  constructor( private allRequest: AllRequestService) { }

  ngOnInit(): void {

    $(function($) {
      // js for carousel
      let items = document.querySelectorAll('.partner .carousel .carousel-item')
      items.forEach((el) => {
        const minPerSlide = 4
        let next = el.nextElementSibling
        for (let i=1; i<minPerSlide; i++) {
          if (!next) {
            next = items[0]
          }
          let cloneChild = next.cloneNode(true)
          el.appendChild(cloneChild.childNodes[0])
          next = next.nextElementSibling
        }
      })
      // js for our services cards
    /*  $('.show').on('click',function(){
        let target = $(this).attr('data-target');
        $('.'+target).slideToggle('slow');
      });

      $('.close').on('click',function(){
        $(this).parent().slideToggle('slow');
      });*/

    });

    this.getDescriptionKoori()
    this.getDescriptionIbox()
    this.getServices()
    this.getTemoignages()
  }

  getDescriptionKoori(){
    this.allRequest.getAll("get/koori/last","description").subscribe((data:any)=>{
      this.koori = new Koori().deserialize(data)
    })
  }
  getDescriptionIbox(){
    this.allRequest.getAll("get/ibox/last",).subscribe((data:any)=>{
      this.ibox = new Ibox().deserialize(data)
    })
  }

  getServices(){
    this.allRequest.getAll("get/services",).subscribe((data:any)=>{
      // this.services = data.map((service:Service)=> new Service().deserialize(service))
      this.services= data
    })
  }

  getTemoignages() {
    this.allRequest.getAll("get/temoignages").subscribe((data: any) => {
      this.temoignages = data.map((temoignage: Temoignage) => new Temoignage().deserialize(temoignage))
    })
  }


  slideToggle(ref:any) {
    let target = $(ref).attr('data-target');
    $('.'+target).slideToggle('slow');
  }
}
