import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtJsontoxmlControllerComponent } from './lt-jsontoxml-controller.component';

describe('LtJsontoxmlControllerComponent', () => {
  let component: LtJsontoxmlControllerComponent;
  let fixture: ComponentFixture<LtJsontoxmlControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtJsontoxmlControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtJsontoxmlControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
