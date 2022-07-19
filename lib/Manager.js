const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
       super(name, id, email);
       this.officeNumber=officeNumber;
    }
    getRole(){
        return "Manager";
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
    getofficeNumber() {
        return this.officeNumber;
    }
  
}

module.exports = Manager;