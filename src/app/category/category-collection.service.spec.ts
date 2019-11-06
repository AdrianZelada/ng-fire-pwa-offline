import { TestBed } from '@angular/core/testing';

import { CategoryCollectionService } from './category-collection.service';

describe('CategoryCollectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoryCollectionService = TestBed.get(CategoryCollectionService);
    expect(service).toBeTruthy();
  });
});
