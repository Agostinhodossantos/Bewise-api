const {UserControl} = require("../controllers/baseController"); 
const {checkUser} = require('../utils/validator');
const userControl = new UserControl();

const getAllUsers = async(req, res) => {
    let response = await userControl.getAllUsers();
    return res.status(response.statusCode).json(response.message);
}

const setUser = async (req, res) => {
    let data;
    try {
        data = checkUser(req.body);
    } catch (error) {
        return res.status(500).send({status: 500, message: error})
    }
   let response = await userControl.createUser(data);

   return res.status(response.statusCode).send(response);
}

const getUser = async (req, res) => {
    let id = req.params.id;
    let response = await userControl.getUser(id);

    return res.status(response.statusCode).send(response.message);
}

const deleteUser = async(req, res) => {
    let id = req.params.id;
    let response = await userControl.deleteUser(id);

    return res.status(response.statusCode).json(response);
}

const updateUser = async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    let response = await userControl.updateUser(id, data);

    return res.status(response.statusCode).json(response.message);
}

module.exports = {
    getAllUsers, setUser, getUser, deleteUser, updateUser
}