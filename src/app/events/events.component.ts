import {User} from '../user';
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  
  @Input() user: User;
  
  constructor() {
  }
  
  ngOnInit() {
  }
  
}
