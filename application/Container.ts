import { Container } from 'inversify';
import TYPES from './Types';
import { Application } from './Application';
import { UserRepository } from './domain/repositories';
import { UserUsecases } from './domain/usecases';
import { UserInteractor } from './interactors';
import { InMemoryUserRepository } from './infrastracture/InMemory';

export const ApplicationContainer = new Container();
ApplicationContainer.bind<UserRepository>(TYPES.UserRepository).to(InMemoryUserRepository);
ApplicationContainer.bind<UserUsecases>(TYPES.UserUsecases).to(UserInteractor);
ApplicationContainer.bind<Application>(TYPES.Application).to(Application);
