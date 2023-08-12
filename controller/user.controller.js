const { mongoose } = require("mongoose");

const users = mongoose.model('Users')

const createUser = async (req,res)=>{
    const { userName, email, password} = req.body
    const user = new users({
        userName,
        email,
        password
    })
    const respons = await user.save()
    res.json({
        message: "usuario guardardo",
        data: respons
    })
}

const readAllusers = (req,res) => {
    const data = users.find({})
    res.json({message: "showing all data",
    data: data
})
}

const readUser = (req, res) => {
    const {id} = req.params
    res.json({
        message: "showing user id",
        data: users[(id)]
    })
}

const updateUser = (req,res) => {
    const { id } =  req.params
    const { userName, email, password} = req.body
    users[Number(id)] = {
        userName,
        email,
        password
    }
    res.json({
        message: "user update",
        data: users
    })
}

const deleteUser = (req,res) => {
    const { id } = req.params 
}

module.exports = {
    createUser,
    readAllusers,
    readUser,
    updateUser,
    deleteUser
}