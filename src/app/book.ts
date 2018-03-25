import { Room } from './room';

export class Book {
  public id: number;
  public name: string;
  public author: string;
  public title: string;
  public showFrustration: boolean;
  public showHours: boolean;
  public maxFrustration: number;
  public maxHours: number;
  public maxFrustrationRoomId: number;
  public maxHoursRoomId: number;
  public firstRoomId: number;
  public rooms: Room[];

  public constructor(init?: Partial<Book>) {
    Object.assign(this, init);
  }
}
