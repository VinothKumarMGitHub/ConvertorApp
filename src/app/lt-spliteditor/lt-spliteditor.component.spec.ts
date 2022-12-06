import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtSpliteditorComponent } from './lt-spliteditor.component';

describe('LtSpliteditorComponent', () => {
  let component: LtSpliteditorComponent;
  let fixture: ComponentFixture<LtSpliteditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtSpliteditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LtSpliteditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
