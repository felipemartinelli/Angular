import { TestBed } from '@angular/core/testing';

import { TarefawebService } from './tarefaweb.service';

describe('TarefawebService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TarefawebService = TestBed.get(TarefawebService);
    expect(service).toBeTruthy();
  });
});
