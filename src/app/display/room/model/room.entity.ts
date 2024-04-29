export class Room {

  id: string;
  roomNumber: number;
  guest: string;
  state: string;
  reservation: Date;

  constructor(id: string, roomNumber: number, guest: string, state: string, reservation: Date) {
    this.id = id;
    this.roomNumber = roomNumber;
    this.guest = guest;
    this.state = state;
    this.reservation = reservation;
  }
}
