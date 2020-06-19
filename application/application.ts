import { injectable, inject } from "inversify";
import { UserUsecases } from './domain/usecases';
import TYPES from './Types';

@injectable()
export class Application {
  @inject(TYPES.UserUsecases) private _userUsecase: UserUsecases;
  usrUsecases(): UserUsecases { return this._userUsecase; }
}
