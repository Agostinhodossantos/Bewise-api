const userController = require("../controllers/baseController"); 

const getAllUsers = async(req, res) => {
    return res.status(204).json({
        status: 'success',
        data: null
    });
}

const setUser = async(req, res) => {
    let data = req.body;
    let response = await userController.createUser(data);
    console.log(response);
   return res.status(200).send(response);
}

module.exports = {
    getAllUsers, setUser
}