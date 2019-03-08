import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

// import { USERS } from 'service/mock-users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  
  title: 'Usuários';
  
  constructor(private usersService: UserService) {
  }

  users: User[];
  selectedUser: User;
  
  // constructor(private userService: UserService) { }
  
  // ngOnInit lifecycle hook that happens after constructs the component
  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers()
      .subscribe(users => this.users = users);
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

}
