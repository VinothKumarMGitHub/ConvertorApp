import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtJsontocsPageComponent } from './lt-jsontocs-page.component';

describe('LtJsontocsPageComponent', () => {
  let component: LtJsontocsPageComponent;
  let fixture: ComponentFixture<LtJsontocsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtJsontocsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtJsontocsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
