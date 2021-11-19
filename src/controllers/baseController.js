const {defaultDatabase, defaultFirestore} = require('../utils/dbconfig');
const AppReturn = require('../utils/appError');
const REF_USER = "users";


const usersControl = [
    
]
const createUser = async(user) => {
    await defaultFirestore
        .collection(REF_USER)
        .doc(user.id)
        .create(user)
        .then(_=> {
            return new AppReturn(200, "OK", "Usuario criado com sucesso");
        })
        .catch(err => {
           return new AppReturn(502,"OK", error.message);
        })
        
}

module.exports = {
    createUser
}
