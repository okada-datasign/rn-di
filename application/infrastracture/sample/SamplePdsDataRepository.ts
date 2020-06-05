import { PdsData } from '../../domain/models/PdsData';
import { PdsDataRepository } from '../../domain/repositories/PdsDataRepository';

export class SamplePdsDataRepository implements PdsDataRepository {
  list(userId: string): PdsData[] {
    return [
      new PdsData({id: '1', userId: '1', content: { name: 'Sample list' }})
    ];
  }

  get(id: string): PdsData {
    return new PdsData({id: '1', userId: '1', content: { name: 'Sample get' }})
  }

  create(pdsData: PdsData): PdsData {
    return new PdsData({id: '1', userId: '1', content: { name: 'Sample create' }})
  }

  update(pdsData: PdsData): PdsData {
    return new PdsData({id: '1', userId: '1', content: { name: 'Sample update' }})
  }

  delete(id: string): void {
  }
}