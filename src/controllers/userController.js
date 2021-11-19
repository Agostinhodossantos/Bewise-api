const getAllUsers = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null
    });
}

module.exports = {
    getAllUsers
}