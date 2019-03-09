import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {User} from '../user';
import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  
  @Input() user: User;
  
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private location: Location
  ) {
  }
  
  ngOnInit(): void {
    this.getUser();
  }
  
  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUser(id)
      .subscribe(user => this.user = user);
  }
  
  goBack(): void {
    this.location.back();
  }
}
