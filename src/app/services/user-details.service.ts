import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserDetailsService {

  constructor() { }

  getUserDetails(): User {
    let user: User = new User(
      "Hrithik",
      "Roshan",
      "Mumbai",
      "assets/user.jpg",
      "India",
      new Date("1988-11-11"),
      "male",
      false,
      true,
      true,
      true,
      "#ffffff"
    );
    return user;
  }

  getUsers(): User[] {
    let users: User[]=[];
    users.push(new User("Hrithik", "Roshan", "Mumbai", "assets/user.jpg", "India", new Date("1988-11-11"), "male", false, true, true, true, "#ffffff"));
    users.push(new User("Salman", "khan", "Mumbai", "assets/user.jpg", "India", new Date("1988-11-11"), "male", false, true, true, true, "#ffffff"));
    users.push(new User("shahrukh", "khan", "Mumbai", "assets/user.jpg", "India", new Date("1988-11-11"), "male", false, true, true, true, "#ffffff"));
    return users;
  }

}
