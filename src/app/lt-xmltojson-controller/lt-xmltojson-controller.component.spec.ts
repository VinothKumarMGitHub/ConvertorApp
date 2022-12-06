import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtXmltojsonControllerComponent } from './lt-xmltojson-controller.component';

describe('LtXmltojsonControllerComponent', () => {
  let component: LtXmltojsonControllerComponent;
  let fixture: ComponentFixture<LtXmltojsonControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtXmltojsonControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtXmltojsonControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
