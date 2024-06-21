import {RoleUser} from "../../iam/model/roll-user";

export class User {
  id:number;
  email: string;
  rolUser: RoleUser;
  fullName: string;
  phoneNumber: string;
  salary: number;
  initialDate: string;
  finalDate: string;

  constructor() {
    this.id=0;
    this.email = '';
    this.rolUser = RoleUser.NONE;
    this.fullName = '';
    this.phoneNumber = '';
    this.salary = 0;
    this.initialDate = '';
    this.finalDate = '';
  }

  public getNiceInitialDate(): Date {
    return new Date(this.initialDate);
  }

  public getNiceFinalDate(): Date {
    return new Date(this.finalDate);
  }

}
