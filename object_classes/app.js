let Data = "Secret information."

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData () {
        console.log("Data = ", Data);
    }
}

let student1 = new User("nahian", "abc@gmail.com");
let student2 = new User("nila", "nila@gmail.com");