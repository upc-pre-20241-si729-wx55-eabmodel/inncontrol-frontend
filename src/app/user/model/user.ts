export class User {
  id:number;
  email: string;
  rol_user: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;

  constructor() {
    this.id=0;
    this.email = '';
    this.rol_user = '';
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
    this.password = '';
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

}
