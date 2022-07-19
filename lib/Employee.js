class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getRole() {
        return "Employee";
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
  
}

module.exports = Employee;
