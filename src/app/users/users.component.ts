import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements OnInit {
  title: 'Usuários';
  users: User[];

  // constructor(private userService: UserService) { }
  constructor(private usersService: UserService) {
  }

  // ngOnInit lifecycle hook that happens after constructs the component
  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.usersService.getUsers()
      .subscribe(users => this.users = users);
  }
}
