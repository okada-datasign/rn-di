import { Container } from 'inversify';
import "reflect-metadata";
import {
  TYPES,
  UserRepository,
  UserUsecase,
  InMemoryUserRepository,
  UserInteractor,
  FooApplication,
} from './FooApplication';

const container = new Container();
container.bind<UserRepository>(TYPES.UserRepository).to(InMemoryUserRepository);
container.bind<UserUsecase>(TYPES.UserUsecase).to(UserInteractor);
container.bind<FooApplication>(TYPES.Application).to(FooApplication);

export { container };
