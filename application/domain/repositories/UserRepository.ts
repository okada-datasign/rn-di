import { User } from '../models';

export interface UserRepository {
  FindAll(): User[];
  FindById(id: string): User | undefined;
  Create(user: User): void;
  Update(user: User): void;
  Delete(id: string): void;
}