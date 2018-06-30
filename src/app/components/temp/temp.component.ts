import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent {
fName: string = "Atul";
  fNameHeader: string = "First name :";
  lName: string = "Chirame";
  lNameHeader: string = "Last name :";
  city: string = "Pune";
  cityheader: string = "City :";
  userImage: string = "assets/user.jpg";
  userCountry: string = "Canada";
  contries: string[] = ["India",
    "US", "Canada", "AUS", "England"];
  dob = new Date("2018-11-26");
  gender:string="Male";

  cansing:boolean;
  canDance:boolean=true;
  canRead:boolean=true;
  canSwim:boolean;

  favCor="#ffffff";

  get dobString(): string {
    let test = this.dob.getFullYear() + "-" +
      (this.dob.getMonth() + 1) + "-" +
      this.dob.getDate();

    //this.dob.get
    console.log(test);
    return test;
  }

  set dobString(x: string) {
    debugger
    this.dob = new Date(x);
  }

  saveInfo(): void {
    alert('Save clicked');

    debugger
  }
  

}
