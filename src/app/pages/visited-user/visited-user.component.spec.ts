import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitedUserComponent } from './visited-user.component';

describe('VisitedUserComponent', () => {
  let component: VisitedUserComponent;
  let fixture: ComponentFixture<VisitedUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitedUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
