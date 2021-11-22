const userController = require("../controllers/baseController"); 
const {vUser} = require('../utils/validator');

const getAllUsers = async(req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    });
}

const setUser = async(req, res) => {
    let data = req.body;
    let isValid = vUser(data); // check is user is valid

    if (isValid) {
        let resp = await userController.createUser(data);
        return res.status(resp.statusCode).send(resp)
    } else {
        return res.status(500).send({error: isValid});
    }
   

}

module.exports = {
    getAllUsers, setUser
}