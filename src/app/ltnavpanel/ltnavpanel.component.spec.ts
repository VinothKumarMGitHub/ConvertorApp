import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtnavpanelComponent } from './ltnavpanel.component';

describe('LtnavpanelComponent', () => {
  let component: LtnavpanelComponent;
  let fixture: ComponentFixture<LtnavpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtnavpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtnavpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
