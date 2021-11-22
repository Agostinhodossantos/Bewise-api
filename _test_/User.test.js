const { expectCt } = require('helmet');
const {User} = require('../src/models/User');


class MyUser {
    constructor(id, email, name, phone, location, school_levels, createdAt, status,others) {
        this.id = id;
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.location = location;
        this.school_levels = school_levels;
        this.createdAt = createdAt;
        this.status = status;
        this.others = others;
    }
}



test(`User class keys should be ${Object.keys(new User).toString()}`, () => {
    expect(Object.keys(new User).toString()).toBe(Object.keys(new MyUser).toString())
});