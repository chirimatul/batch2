export class User {
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

    constructor(
        public fName: string,
        public lName: string,
        public city: string,
        public userImage: string,
        public userCountry: string,
        public dob: Date,
        public gender: string,
        public cansing: boolean,
        public canDance: boolean,
        public canRead: boolean,
        public canSwim: boolean,
        public favCor: string
    ) {
        

    }
}
