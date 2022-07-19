const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
       super(name, id, email);
       this.gitHub=gitHub;
    }
    getRole(){
        return "Engineer";
    }
    getname() {
        return this.name;
    }
    getid() {
        return this.id;
    }
    getemail() {
        return this.email;
    }
    getgitHub() {
        return this.gitHub;
    }
}

module.exports = Engineer;