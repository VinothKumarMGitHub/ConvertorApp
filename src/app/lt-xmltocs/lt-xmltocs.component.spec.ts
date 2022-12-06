import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtXmltocsComponent } from './lt-xmltocs.component';

describe('LtXmltocsComponent', () => {
  let component: LtXmltocsComponent;
  let fixture: ComponentFixture<LtXmltocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtXmltocsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtXmltocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
