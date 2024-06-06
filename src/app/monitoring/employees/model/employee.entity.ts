export class EmployeeEntity {

  profileId: number;
  personName: string;
  serviceHours: string;
  tasks: number;
  role: string;

  constructor(profileId: number, personName: string, serviceHours: string, tasks: number, role: string){
    this.profileId = profileId;
    this.personName = personName;
    this.serviceHours = serviceHours;
    this.tasks = tasks;
    this.role = role;
  }

  getRole() {
    return this.role;
  }

}
