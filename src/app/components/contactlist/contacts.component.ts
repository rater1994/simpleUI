import { Component, OnInit } from '@angular/core';
import { ContactService} from '../../shared_service/contact.service';
import {Contact} from '../../Contact';
import {Router} from '@angular/router';


@Component({
  selector: 'app-listcontacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ListuserComponent implements OnInit {
  private contact:Contact[];
  
  constructor(private _contactService:ContactService,private _router:Router) { }

  ngOnInit() {
    this._contactService.getAllContacts().subscribe((contact)=>{
    console.log(contact);
    this.contact = contact;
  },(error)=>{
    console.log(error);
    })

  }

  deleteContact(contact){
    this._contactService.deleteContact(contact.id).subscribe(
      (data)=>{
        console.log(data);
          this.contact.splice(this.contact.indexOf(contact),1);
    },(error)=>{
      console.log(error);
    });
  }

  editContact(contact){
    // console.log("TEST---> "+ this._contactService.editContact(contact));
    this._router.navigate(['edit/', contact.id]);

  }

  newContact(){
    let contact = new Contact();
    this._contactService.setter(contact);
    this._router.navigate(['/op']);
  }

}
