import { Injectable } from '@angular/core';
import { Fiche } from '../_models/fiche';
import {Observable, Subject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SenddataService {
  private data: Fiche[] = [];
  private id: number=0;
  private html!: JQuery<HTMLElement>;
  private datascroll: object = {temp: [], bool: false}
  private isScroll:boolean = false
  private subject = new Subject<string>()

  constructor() {}

  sendData(data: string){
    this.subject.next(data);
  }
  receiveData():Observable<string>{
    return this.subject.asObservable();
  }

  setData(data){
    this.data = data;
  }
  getdata(){
    return this.data;
  }
  setId(id){
    this.id = id;
  }
  getId(){
    return this.id;
  }
  setDataScroll(data, isScroll){
    this.datascroll['temp'] = data;
    this.datascroll['bool'] = isScroll;
  }
  getDataScroll(){
    let temp = this.datascroll['temp'];
    let boolean = this.datascroll['bool']
    return {temp, boolean}
  }
  setHtml(html){
    this.html = html;
  }
  getHtml(){
    return this.html;
  }
}
