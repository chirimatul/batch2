import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../../services/user-details.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: []
})
export class UserListComponent implements OnInit {

  users: User[];
  constructor(private service: UserDetailsService) {


  }

  ngOnInit() {
    this.users = this.service.getUsers();
  }

}
