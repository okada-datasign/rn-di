export class User {
  public id: string = '';
  public name: string = '';
  
  constructor(user?: Partial<User>) {
    Object.assign(this, user);
  }
}