const { check,  } = require('express-validator');
const {isEmpty, getDate} = require('../utils/utils');
const {User} = require('../models/User');
const {Book} = require('../models/Book');

function checkBook(book) {
    let {id , title, description, img_cover, url_location} = book;

    let err = [];

    if (isEmpty(id)) {
        err.push("id must not be empty");
    } else if (isEmpty(title)) {
        err.push("title must not be empty")
    } 
    if (isEmpty(description)) {
        description = "";
    } 
    if (isEmpty(img_cover)) {
        err.push("img_cover must not be empty")
    }
    if (isEmpty(url_location)) {
        err.push("url_location must not be empty")
    }


    if (err.length > 0) {
        throw err.toString()
    } 

    let userObject = new Book(id, title, description, img_cover, url_location);
    return JSON.parse(JSON.stringify(userObject));
}

function checkUser(user){
    var {id, email, name, phone, location, school_levels, createdAt, others} = user;
    let err = [];

    if (isEmpty(id)) {
        err.push('id is requiered')
    } else if(isEmpty(email)) {
        err.push('email is required');
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