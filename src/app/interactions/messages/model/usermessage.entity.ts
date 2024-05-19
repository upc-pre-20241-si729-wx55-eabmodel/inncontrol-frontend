export class UsermessageEntity {

  id: string;
  name: { title: string, first: string, last: string };

  constructor(id: string, name: { title: string, first: string, last: string }) {
    this.id = id;
    this.name = name;
  }

  concatName() {
    return this.name.title + ' ' + this.name.first + ' ' + this.name.last;
  }

}
