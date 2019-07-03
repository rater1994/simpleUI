import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from "@angular/http";
import { Observable} from 'rxjs/Observable';



import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import{Contact} from '../Contact';

@Injectable()
export class ContactService {

  private baseUrl:string="http://localhost:8080/api";
  private headers = new Headers({'Content-Type':'application/json'});
  private options = new RequestOptions({headers:this.headers});
  private contact:Contact;
  constructor(private _http:Http) { }

  getAllContacts() {
    return this._http.get(this.baseUrl+'/getallcontacts',this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  addNewContact(contact: Contact) {
    return this._http.post(this.baseUrl+'/addnewcontact',JSON.stringify(contact), this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  getOneContact(id:Number){
    return this._http.get(this.baseUrl + '/getonecontact'+ id, this.options).map((response:Response)=>response.json())
    .catch(this.errorHandler);
  }

  editContact(contact:Contact){
    console.log(contact);
    return this._http.put(this.baseUrl + '/editcontact/' + contact.id , JSON.stringify(contact), this.options);
  }

  deleteContact(id:Number){
    return this._http.delete(this.baseUrl+'/deletecontact/'+ id, this.options);
  }

  // createUsers(user:User){
  //   return this._http.post(this.baseUrl+'/user',JSON.stringify(user), this.options).map((response:Response)=>response.json())
  //   .catch(this.errorHandler);
  // }

  

  errorHandler(error:Response){
    return Observable.throw(error||"Server error");
  }

  setter(contact:Contact){
    this.contact=contact;
  }

  getter(){
    return this.contact;
  }
  
}
