import {RoleUser} from "./roll-user";

export class User {
  id:number;
  email: string;
  rolUser: RoleUser;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;

  constructor() {
    this.id=0;
    this.email = '';
    this.rolUser = RoleUser.Employee;
    this.firstName = '';
    this.lastName = '';
    this.phoneNumber = '';
    this.password = '';
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

}
