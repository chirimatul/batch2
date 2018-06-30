import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable()
export class UserDetailsService {

  constructor() { }

  getUserDetails():User{
    let user:User = new User();
    return user;
  }

}
