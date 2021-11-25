const {BookControl} = require('../controllers/baseController');

const getAllBooks = async(req, res) => {
    const response = await BookControl.getAllBooks()
    return res.status(response.statusCode).json(response);
}

const setBook = async(req, res) => {
    const book = req.body;
}

const getBook = (req, res) => {
}

module.exports = {
    getAllBooks
}