import { Container, injectable, inject } from "inversify";
import "reflect-metadata";
import { createContext } from 'react';

export class User {
  public id: string = '';
  public name: string = '';
  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}

export interface UserRepository {
  FindAll(): User[];
  FindById(id: string): User | undefined;
  Create(user: User): void;
  Update(user: User): void;
  Delete(id: string): void;
}

export interface UserUsecase {
  FindAll(): User[];
  FindById(id: string): User | undefined;
  Create(name: string): void;
  Update(id: string, name: string): void;
  Delete(id: string): void;
}

export const TYPES = {
  UserRepository: Symbol.for('UserRepository'),
  UserUsecase: Symbol.for('UserUsecase'),
  Application: Symbol.for('Application'),
};

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

@injectable()
export class UserInteractor implements UserUsecase {
  @inject(TYPES.UserRepository) private _userRepository: UserRepository;

  FindAll() {
    return this._userRepository.FindAll();
  }

  FindById(id: string) {
    return this._userRepository.FindById(id);
  }

  Create(name: string) {
    return this._userRepository.Create(new User({name}));
  }

  Update(id: string, name: string) {
    return this._userRepository.Update(new User({id, name}))
  }

  Delete(id: string) {
    return this._userRepository.Delete(id);
  }
}

@injectable()
export class FooApplication {
  @inject(TYPES.UserUsecase) private _userUsecase: UserUsecase;
  
  constructor() {}

  usrUsecase(): UserUsecase {
    return this._userUsecase;
  }
}

// export const FooApplicationContainer = new Container();
// FooApplicationContainer.bind<UserRepository>(TYPES.UserRepository).to(InMemoryUserRepository);
// FooApplicationContainer.bind<UserUsecase>(TYPES.UserUsecase).to(UserInteractor);
// FooApplicationContainer.bind<FooApplication>(FooApplication).toSelf();

export const FooAppContext = createContext<FooApplication | null>(null);