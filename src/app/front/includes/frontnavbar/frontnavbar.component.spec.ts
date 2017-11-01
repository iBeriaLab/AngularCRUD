import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontnavbarComponent } from './frontnavbar.component';

describe('FrontnavbarComponent', () => {
  let component: FrontnavbarComponent;
  let fixture: ComponentFixture<FrontnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
