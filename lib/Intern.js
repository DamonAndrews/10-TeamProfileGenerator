const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
       super(name, id, email);
       this.school=school;
    }

    getRole(){
        return "Intern";
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
    getschool() {
        return this.school;
    }

}

module.exports = Intern;