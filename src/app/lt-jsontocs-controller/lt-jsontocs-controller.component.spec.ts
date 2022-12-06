import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtJsontocsControllerComponent } from './lt-jsontocs-controller.component';

describe('LtJsontocsControllerComponent', () => {
  let component: LtJsontocsControllerComponent;
  let fixture: ComponentFixture<LtJsontocsControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtJsontocsControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtJsontocsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
