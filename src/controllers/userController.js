const userController = require("../controllers/baseController"); 
const {checkUser} = require('../utils/validator');

const getAllUsers = async(req, res) => {
    return res.status(204).json({
        status: 'success',
        data: null
    });
}

const setUser = async (req, res) => {
    let data;
    try {
        data = checkUser(req.body);
    } catch (error) {
        console.log("err"+ error);
        return res.status(500).send({status: 500, message: error})
    }

    // console.log(data.id)
    // return res.status(200).send(JSON.stringify(data))
   let response = await userController.createUser(data);
   return res.status(response.statusCode).send(response);
}

module.exports = {
    getAllUsers, setUser
}