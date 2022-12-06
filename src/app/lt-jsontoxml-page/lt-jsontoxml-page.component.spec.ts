import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtJsontoxmlPageComponent } from './lt-jsontoxml-page.component';

describe('LtJsontoxmlPageComponent', () => {
  let component: LtJsontoxmlPageComponent;
  let fixture: ComponentFixture<LtJsontoxmlPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtJsontoxmlPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtJsontoxmlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
