import { PdsData } from '../../domain/models/PdsData';
import { PdsDataRepository } from '../../domain/repositories/PdsDataRepository';

export interface PdsDataGetInput {
  id: string;
}

export interface PdsDataGetOutput {
  pdsData: PdsData;
}

export interface PdsDataGetUsecase {
  pdsDataRepository: PdsDataRepository;
  execute(input: PdsDataGetInput): PdsDataGetOutput;
}