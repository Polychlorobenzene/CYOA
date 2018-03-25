import { Room } from './room';
export class Choice {
  public id: number;
  public name: string;
  public description: string;
  public room: Room;

  public constructor(init?: Partial<Choice>) {
    Object.assign(this, init);
  }
}
