import { Room } from './room';
import { Choice } from './choice';
import { Book } from './book';

export const BOOK: Book[] = [
    {
        id: 11,
        name: 'Contractor Simulator',
        author: 'Noel Marshall',
        title: 'Contractor Simulator',
        showFrustration: true,
        showHours: true,
        maxFrustration: 10,
        maxHours: 8,
        maxFrustrationRoomId: 99,
        maxHoursRoomId: 98,
        firstRoomId: 1,
        rooms: [
            {
                id: 1,
                title: 'Cubical Start',
                choices:  [],
                frustration: 1,
                hours: 1
            }]
    }];
