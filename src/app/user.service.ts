import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user: User[] =  [{
    id: 1,
    name: 'Wendell',
    email: 'wendell@easyplanner',
    company: 'Easyplanner'
  },
    {
      id: 2,
      name: 'Zé',
      email: 'ze@gmail.com',
      company: 'Ze Eventos'
    }];

  getUsers(): User [] {
    return this.user;
  }
}
