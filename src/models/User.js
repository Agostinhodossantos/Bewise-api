class User {
    constructor(id, email, name, phone, location, school_levels, createdAt, others) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.location = location;
        this.school_levels = school_levels;
        this.createdAt = createdAt;
        this.others = others;
    }
}

module.exports = {
    User
}

