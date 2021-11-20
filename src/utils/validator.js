const { check,  } = require('express-validator');
const {isEmpty, getDate} = require('../utils/utils');
const { User } = require('../models/User');

function checkUser(user){
    var {id, email, name, phone, location, school_levels, createdAt, others} = user;
    let err = [];

    if (isEmpty(id)) {
        err.push('id is requiered')
    } else if(isEmpty(email)) {
        err.push('Email is required');
    } else if(isEmpty(name)) {
        name = "";
    } else if(isEmpty(phone)) {
        phone = "";
    } else if (isEmpty(location)) {
        location = "";
    } else if (isEmpty(school_levels)) {
        school_levels = "";
    } else if (isEmpty(createdAt)) {
        createdAt = getDate;
    } else if (isEmpty(others)) {
        others = "";
    } else {
        console.log(id)
        let user_obj = new User(id, email, name, phone, location, school_levels, createdAt, others)
        console.log(user_obj)
        return user_obj;
    }

    if (err.length > 0) {
        throw err.toString()
    }

}


module.exports = {
    checkUser
}