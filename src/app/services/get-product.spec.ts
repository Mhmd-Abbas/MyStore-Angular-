import { TestBed } from '@angular/core/testing';

import { GetProduct } from './get-product';

describe('GetProduct', () => {
  let service: GetProduct;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProduct);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
