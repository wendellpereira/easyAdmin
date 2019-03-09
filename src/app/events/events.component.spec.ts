import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {EventsComponent} from './events.component';
import {UsersComponent} from '../users/users.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('EventsComponent', () => {
  let component: EventsComponent;
  let fixture: ComponentFixture<EventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
          EventsComponent,
          UsersComponent
        ]
      })
      .compileComponents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(EventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
