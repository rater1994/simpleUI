import { Component, OnInit } from '@angular/core';
import { ContactService} from '../../shared_service/contact.service';
import { Contact} from '../../Contact';
import { Router} from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  private contact:Contact = new Contact();


  constructor(
    private _contactService:ContactService, 
    private _router:Router) { }

  ngOnInit() {
    // this.contact=this.c.getter();s
  }
  
//   processForm(){
//     console.log(this.contact);
//        this._contactService.addNewContact(this.contact).subscribe((contact)=>{
//          console.log(contact);
//          this._router.navigate(['/']);
//        },(error)=>{
//          console.log(error);
//        }); 
// }


processForm(){
  if(this.contact.id ==undefined){
     this._contactService.addNewContact(this.contact).subscribe((contact)=>{
       console.log(contact);
       this._router.navigate(['/']);
     },(error)=>{
       console.log(error);
     }); 
  }else{
    this._contactService.editContact(this.contact).subscribe((contact)=>{
      console.log(contact);
      this._router.navigate(['/']);
    },(error)=>{
      console.log(error);
    }); 
  }
}

}
