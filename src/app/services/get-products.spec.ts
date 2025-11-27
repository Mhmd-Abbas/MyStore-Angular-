import { TestBed } from '@angular/core/testing';

import { GetProducts } from './get-products';

describe('GetProducts', () => {
  let service: GetProducts;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProducts);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
