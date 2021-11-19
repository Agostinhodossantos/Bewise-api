const { response } = require("../app");
const userController = require("../controllers/baseController"); 

const getAllUsers = async(req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    });
}

const setUser = async(req, res) => {
    let data = req.body;
    let response = await userController.createUser(data);
}

module.exports = {
    getAllUsers
}