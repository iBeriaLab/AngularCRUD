import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUsersListComponent } from './dashboard-users-list.component';

describe('DashboardUsersListComponent', () => {
  let component: DashboardUsersListComponent;
  let fixture: ComponentFixture<DashboardUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
