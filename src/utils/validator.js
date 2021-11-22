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
    } 
    if(isEmpty(name)) {
        name = "";
    } 
    
    if(isEmpty(phone)) {
        phone = "";
    } 
    if (isEmpty(location)) {
        location = "";
    } 
    if (isEmpty(school_levels)) {
        school_levels = "";
    } 
    if (isEmpty(createdAt)) {
        createdAt = getDate();
    } 
    if (isEmpty(others)) {
        others = "";
    }

    if (err.length > 0) {
        throw err.toString()
    } 
    let user_obj = new User(id, email, name, phone, location, school_levels, createdAt, others);
    return JSON.parse(JSON.stringify(user_obj));
}


module.exports = {
    checkUser
}