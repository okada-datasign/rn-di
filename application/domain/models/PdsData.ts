export class PdsData {
  public id: string;
  public userId: string;
  public content: object;

  constructor(args: PdsData) {
    this.id = args.id;
    this.userId = args.userId;
    this.content = args.content;
  }
}