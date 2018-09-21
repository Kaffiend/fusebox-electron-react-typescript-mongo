export class User {
    username: string;
    password: string;
    remember: boolean;

    constructor(username: string, password: string, remember: boolean = false) {
        this.username = username;
        this.password = password;
        this.remember = remember;
    }
}
