export class User {

    first_name: string;
    last_name: string;
    username: string;
    password: string;
    password2: string;
    email: string;
    constructor() {
        this.first_name = "",
        this.last_name = "";
        this.username = "";
        this.password = "";
        this.password2 = "";
        this.email = "";
    }
}

export class LoginUser {
    password: string;
    username: string;
    constructor() {
        this.password = "";
        this.username = "";
    }
}