import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtXmltocsControllerComponent } from './lt-xmltocs-controller.component';

describe('LtXmltocsControllerComponent', () => {
  let component: LtXmltocsControllerComponent;
  let fixture: ComponentFixture<LtXmltocsControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtXmltocsControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtXmltocsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
