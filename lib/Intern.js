// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.


class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school
    }

    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Intern"
    }
    getId() {
        return this.id;
    }
    getSchool() {
        return this.school;
    }

}


module.exports = Intern





