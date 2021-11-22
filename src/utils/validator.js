const { isEmpty } = require('lodash');
const {isEmpty} = require('../utils/utils');

const vUser = (user) => {
    let err = [];
    let {id, name} = user;

    if(isEmpty(id)) {
        err.push('ID: must not be empty');
    } else if(isEmpty(name)) {
        err.push("NAME: must not be empty");
    }
    return err
}

module.exports = {
    vUser
}