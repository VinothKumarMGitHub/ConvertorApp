import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtfooterComponent } from './ltfooter.component';

describe('LtfooterComponent', () => {
  let component: LtfooterComponent;
  let fixture: ComponentFixture<LtfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
