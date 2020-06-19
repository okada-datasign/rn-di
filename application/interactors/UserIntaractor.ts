import { injectable, inject } from "inversify";
import { User } from '../domain/models';
import { UserRepository } from '../domain/repositories';
import { UserUsecases } from '../domain/usecases';
import TYPES from '../Types';

@injectable()
export class UserInteractor implements UserUsecases {
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
