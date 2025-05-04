import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastordersComponent } from './pastorders.component';

describe('PastordersComponent', () => {
  let component: PastordersComponent;
  let fixture: ComponentFixture<PastordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
