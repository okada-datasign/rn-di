import { PdsData } from '../models/PdsData';

export interface PdsDataRepository {
  list(userId: string): PdsData[];
  get(id: string): PdsData;
  create(pdsData: PdsData): PdsData;
  update(pdsData: PdsData): PdsData;
  delete(id: string): void;
}