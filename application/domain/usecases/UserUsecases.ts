import { User } from '../models';

export interface UserUsecases {
  FindAll(): User[];
  FindById(id: string): User | undefined;
  Create(name: string): void;
  Update(id: string, name: string): void;
  Delete(id: string): void;
}
