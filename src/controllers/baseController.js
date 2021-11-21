const {defaultDatabase, defaultFirestore} = require('../utils/dbconfig');
const AppReturn = require('../utils/appError');
const REF_USER = "users";


class UserControl {
    constructor(){}
    async createUser(user) {
        return await defaultFirestore
        .collection(REF_USER)
        .doc(user.id)
        .create(user)
        .then(_=> {
            return new AppReturn(200, "OK", "Usuario criado com sucesso");
        })
        .catch(err => {
           return new AppReturn(502,"Error", err);
        })
    }
   
    async getUser(id) {
        return await defaultFirestore
            .collection(REF_USER)
            .doc(id)
            .get()
            .then(dataSnapshot => {
                console.log(dataSnapshot);
                return new AppReturn(200, "OK", dataSnapshot.data());
            })
            .catch(err => {
                return new  AppReturn(502, 'ERROR', err)
            })
    }

    async deleteUser(id) {
        return await defaultFirestore
            .collection(REF_USER)
            .doc(id)
            .delete()
            .then(_=> {
                return new AppReturn(200, "OK", "User removed successfully");
            })
            .catch(err => {
               return new AppReturn(502, "ERROR", err);
            })
    }

    async getAllUsers() {
       let userList = []
       return await defaultFirestore
            .collection(REF_USER)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    userList.push(documentSnapshot.data());
                })
                return new AppReturn(200, "OK", userList);
            })
            .catch(err => {
                return new AppReturn(502, "ERROR", err);
            })
    }
 }


module.exports = {
    UserControl  
}
