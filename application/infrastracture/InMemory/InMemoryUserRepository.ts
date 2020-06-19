import { injectable } from "inversify";
import { User } from '../../domain/models';
import { UserRepository } from '../../domain/repositories';

@injectable()
export class InMemoryUserRepository implements UserRepository {
  private id: number = 0;
  private memory: {[key:string]: User} = {};

  FindAll() {
    return Object.values(this.memory);
  }

  FindById(id: string) {
    if (!this.memory.hasOwnProperty(id)) {
      return undefined;
    }
    return this.memory[id];
  }

  Create(user: User) {
    user.id = (this.id++).toString();
    this.memory[user.id] = user;
  }

  Update(user: User) {
    user.id = (this.id++).toString();
    this.memory[user.id] = user;
  }

  Delete(id: string) {
    if (!this.memory.hasOwnProperty(id)) {
      return;
    }
    delete this.memory[id];
  }
}