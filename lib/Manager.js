// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Manager"
    }
    getId() {
        return this.id
    }
    getOfficeNumber() {
        return this.officeNumber;
    }

}


module.exports = Manager



