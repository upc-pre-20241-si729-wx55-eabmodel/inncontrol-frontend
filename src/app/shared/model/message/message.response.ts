export class MessageResponse {
  constructor(
    public id: number,
    public senderId: number,
    public receiverId: number,
    public message: string,
    public createdAt: string,
    public status: string,
  ) {}

  getDateTime(): Date {
    return new Date(this.createdAt);
  }
}
