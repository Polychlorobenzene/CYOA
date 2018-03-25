export class Hero {
  public id: number;
  public name: string;

  public constructor(init?: Partial<Hero>) {
    Object.assign(this, init);
  }
}
