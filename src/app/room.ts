import { Choice } from './choice';
export class Room {
  public id: number;
  public title: string;
  public choices: Choice[];
  public frustration: number;
  public hours: number;

  public constructor(init?: Partial<Room>) {
    Object.assign(this, init);
  }
}
