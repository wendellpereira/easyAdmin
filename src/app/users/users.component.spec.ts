import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {UsersComponent} from './users.component';
import {EventsComponent} from '../events/events.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          RouterTestingModule
        ],
        declarations: [
          UsersComponent,
          EventsComponent
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
