import { TestBed } from '@angular/core/testing';

import { CodeConvertorService } from './codeconvertor.service';

describe('CodeconvertorService', () => {
  let service: CodeConvertorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodeConvertorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
