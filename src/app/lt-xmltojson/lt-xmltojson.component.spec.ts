import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtXmltojsonComponent } from './lt-xmltojson.component';

describe('LtXmltojsonComponent', () => {
  let component: LtXmltojsonComponent;
  let fixture: ComponentFixture<LtXmltojsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtXmltojsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtXmltojsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
