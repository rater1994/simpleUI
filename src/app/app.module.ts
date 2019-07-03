import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { HttpModule} from '@angular/http';

import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { ListuserComponent } from './components/contactlist/contacts.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { ContactService} from  "./shared_service/contact.service";
import { Contact } from './Contact';
import { EditcontactComponent } from './editcontact/editcontact.component';

const appRoutes:Routes=[
  {path:'',component:ListuserComponent},
  {path:'op',component:UserFormComponent},
  {path:'edit/:id', component:EditcontactComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListuserComponent,
    UserFormComponent,
    EditcontactComponent
  
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
