import { TestBed } from '@angular/core/testing';

import { ProductsCollectionService } from './products-collection.service';

describe('ProductsCollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsCollectionService = TestBed.get(ProductsCollectionService);
    expect(service).toBeTruthy();
  });
});
