const { v4: uuidv4 } = require('uuid');

function getUid() {
    return uuidv4();
}

function getDate() {
    return Date.now().toString()
}

function isEmpty(value) {
    if (typeof value == "string") {
        return checkString(value)
    } else if(typeof value == "object") {
        return checkObject(value)
    } else {
        return checkString(value)
    }
}

function checkObject(value) {
    if (Object.keys(value).length === 0 && value.constructor === Object) {
        return true
    } else {
        return false
    }
}

function checkString(value) {
    if(value == null || value == undefined || value == "") {
        return true
    } else {
        return false
    }
}

module.exports = {
    getDate, isEmpty,getUid
}