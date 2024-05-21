export class Rooms {


  rooms: [
    {
  id: number;
  type: string;
  status: string;
  guest: string;
  reservation: string;
}] ;
constructor(roomId: number, type: string, status: string, guest: string, reservation: string) {
  this.rooms = [
    {
      id: roomId,
      type: type,
      status: status,
      guest: guest,
      reservation: reservation
    }
  ];
}

changeStatus(roomId: number, status: string) {
  this.rooms?.forEach((room) => {
    if (room.id === roomId) {
      room.status = status;
    }
  });
}

  deleteRoom(roomId: number) {

      const deletedRoom:any = [];
      this.rooms?.forEach((room) => {
        if (room.id === roomId) {

        }else {
          deletedRoom.push(room);
        }
      });

      this.rooms = deletedRoom;
  }

  getRoomById(roomId: number) {
    let roomer: any;
    this.rooms?.forEach((room) => {
      if (room.id === roomId) {
        roomer = room;
      }
    });
    return roomer;
  }

  getRoomByStatus() {
  let freeRooms: any = [];
  freeRooms= this.rooms.filter((room) => room.status=== 'free');

  this.rooms.forEach((room) => {
    if (room.status === 'free') {
      freeRooms.push(room);
    }
  })
    this.rooms = freeRooms;
  return this.rooms;
  }

  getRoomByType() {
    let StandardRooms: any = [];
    StandardRooms= this.rooms.filter((room) => room.type=== 'Standard');

    this.rooms.forEach((room) => {
      if (room.type === 'Standard') {
        StandardRooms.push(room);
      }
    });
      this.rooms = StandardRooms;
    return this.rooms;
    }

}




