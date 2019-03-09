import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from './user';
import {USERS} from './users/service/mock-users';
import {MessageService} from './message.service';

// import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService) {
  }
  
  getUsers(): Observable<User[]> {
    this.messageService.add('UserService: fetched users.');
    return of(USERS);
  }
  
  getUser(id: number): Observable<User> {
    // TODO: send the mesage _after_fetching the hero
    this.messageService.add(`UserService: fetched user id=${id}`);
    return of(USERS.find(user => user.id === id));
  }
}
