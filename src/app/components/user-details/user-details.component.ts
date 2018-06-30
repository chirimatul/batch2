import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../../services/user-details.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  providers:[UserDetailsService]
})
export class UserDetailsComponent implements OnInit {

  user:User;
  contries: string[] = ["India",
  "US", "Canada", "AUS", "England"];
  
  constructor(private service:UserDetailsService) { 

  }

  ngOnInit() {
    debugger

    this.user = this.service.getUserDetails();
  }

}
