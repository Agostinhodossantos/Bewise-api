const {defaultDatabase, defaultFirestore} = require('../utils/dbconfig');
const AppReturn = require('../utils/appError');
const REF_USER = "users";
const REF_BOOK = "library"


class UserControl {
    constructor(){}
    async createUser(user) {
        return await defaultFirestore
        .collection(REF_USER)
        .doc(user.id)
        .create(user)
        .then(_=> {
            return new AppReturn(200, "OK", "User created successfully");
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

    async updateUser(id, user_data) {
        return await defaultFirestore
            .collection(REF_USER)
            .doc(id)
            .update(user_data)
            .then(_ => {
                return new AppReturn(200, "OK", "User updated successfully")
            })
            .catch(err => {
                return new AppReturn(502, "ERROR", err);
            })
    }
 }

 class BookControl {
     async getBooks() {
         let books = [];
         return await defaultFirestore
            .collection(REF_BOOK)
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(documentSnapshot => {
                    books.push(documentSnapshot.data());
                })
            return new AppReturn(200, "OK", books);
         }).catch(err => {
            return new AppReturn(502, "ERROR", err);
         })
     }

     async createBook(book) {
         return await defaultFirestore
            .collection('library')
            .collection('books')
            .doc(book.id)
            .create(book)
            .then(_=> {
                return  new AppReturn(200, "OK", "Book created successfully")
            })
            .catch(err => {

            })
     }
 }


module.exports = {
    UserControl, BookControl
}
