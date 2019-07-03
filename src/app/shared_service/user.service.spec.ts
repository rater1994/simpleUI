import { TestBed, inject } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { Contact } from '../Contact';

describe('UserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContactService]
    });
  });

  it('should be created', inject([ContactService], (service: Contact) => {
    expect(service).toBeTruthy();
  }));
});
