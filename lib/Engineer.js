// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Engineer"
    }
    getId() {
        return this.id
    }
    getGithub() {
        return this.github;
    }

}


module.exports = Engineer



