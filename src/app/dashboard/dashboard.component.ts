import {Component, OnInit} from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: User[] = [];

  constructor(private userService: UserService) {
  }
  
  ngOnInit() {
    this.getusers();
  }
  
  getusers(): void {
    this.userService.getUsers()
      .subscribe(users => this.users = users.slice(0, 4));
  }
}
