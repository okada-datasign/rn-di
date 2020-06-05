import { PdsData } from '../../domain/models/PdsData';
import { PdsDataRepository } from '../../domain/repositories/PdsDataRepository';

import {
  PdsDataGetUsecase,
  PdsDataGetOutput,
  PdsDataGetInput,
} from '../../usecases/PdsData/get';

export class PdsDataGetInteractor implements PdsDataGetUsecase {
  pdsDataRepository: PdsDataRepository;
  

  constructor(repository: PdsDataRepository) {
    this.pdsDataRepository = repository;
  }

  execute(input: PdsDataGetInput): PdsDataGetOutput {
    const pdsData = this.pdsDataRepository.get(input.id);
    return { pdsData: pdsData };
  }
}