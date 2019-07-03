import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared_service/contact.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Contact} from '../Contact';

@Component({
  selector: 'app-editcontact',
  templateUrl: './editcontact.component.html',
  styleUrls: ['./editcontact.component.css']
})
export class EditcontactComponent implements OnInit {
  private contact:Contact = new Contact();
  id;

  constructor(
    private _contactService:ContactService, 
    private _activatedRoute: ActivatedRoute,
    private _router:Router) { }

   

  ngOnInit() {
      this.id = this._activatedRoute.snapshot.params['id'];
      this.contact.id = this.id;

  }

  editContact(){
    this._router.navigate(['/']);
    return this._contactService.editContact(this.contact).subscribe( 
      (data) => {
        console.log(data);
       
      } 
    );
    
  }

}
