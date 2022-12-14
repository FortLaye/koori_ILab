import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable, Subject} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AllRequestService {

  envApi = environment.API;

  constructor(private http: HttpClient) { }

  private _refresh = new Subject<any>();

 sendNotification(notif: any){
   this._refresh.next(notif);
 }
 receiveNotification():Observable<any>{
   return this._refresh.asObservable();
 }

  getAll(resources: string, filter="*"){
    let httpHeaders = new HttpHeaders();
    httpHeaders = httpHeaders.append('filter', filter);
    let options = {headers:httpHeaders};

    return this.http.get(this.envApi+resources, options)

  }

  postData(resources:string, data:any){
    return this.http.post(this.envApi+resources,data)
  }

  getById(entity: string, id:number){

    return this.http.get(this.envApi+entity+id)

  }


}
