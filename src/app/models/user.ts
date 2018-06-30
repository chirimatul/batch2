export class User {
    fName: string = "Atul";
    lName: string = "Chirame";
    city: string = "Pune";
    userImage: string = "assets/user.jpg";
    userCountry: string = "Canada";
    dob = new Date("2018-11-26");
    gender: string = "Male";
    cansing: boolean;
    canDance: boolean = true;
    canRead: boolean = true;
    canSwim: boolean;
    favCor = "#EEEEE";

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
    constructor(){


    }
}
