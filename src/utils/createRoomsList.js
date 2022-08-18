import { getRandomIntFromZeroToMax } from "./getRandomNumber";

export const createRoomsList = (data, lessonsAmount) => {
    let rooms = [];
    let availableRooms = data.rooms;

    for(let i = 0; i < lessonsAmount; i++) {
        
        let index = getRandomIntFromZeroToMax(availableRooms.length);
        rooms.push(availableRooms[index].number);
        availableRooms.splice(index, 1);
    }

    return rooms;
}