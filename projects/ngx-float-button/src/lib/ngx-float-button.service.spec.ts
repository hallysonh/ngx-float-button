import { TestBed } from '@angular/core/testing';

import { NgxFloatButtonService } from './ngx-float-button.service';

describe('NgxFloatButtonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFloatButtonService = TestBed.get(NgxFloatButtonService);
    expect(service).toBeTruthy();
  });
});
