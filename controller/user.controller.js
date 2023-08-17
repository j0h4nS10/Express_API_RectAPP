const { mongoose } = require("mongoose");

const users = mongoose.model('Users')

const createUser = async (req, res) => {
    const { name, lastName, email, password } = req.body
    const user = new users({
        name,
        lastName,
        email,
        password
    })
    const respons = await user.save()
    res.json({
        message: "user save",
        data: respons
    })
}

const readAllusers = async (req, res) => {
    try {
        const respons = await users.find();
        if (!users.lenght) {
            res.status(404)
            res.json({
                message: "empty collection"
            })
        }
        else {
            res.status(200)
            res.json({
                message: "showing all data",
                data: respons
            })
        }
    } catch (err) {
        console.error(err);
        res.status(400)
        res.json({
            message: "server error"
        })
    }
}

const readUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await users.findById(id);
        if (!user) {
            res.status(404)
            res.json({
                message: `user not found with id ${id}`,
            })
        } else {
            res.status(200)
            res.json({
                message: `User`,
                data: user
            })
        }
    } catch (err) {
        console.error(err)
        res.status(400)
        res.json({
            message: `server error`
        })

    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const userdb = await users.findById(id);
        const { name, lastName, email, password } = req.body
        if (!userdb) {
            res.status(404)
            res.json({
                message: "user not found"
            })
        } else {
            const updatedUser = await users.findByIdAndUpdate(
                id,
                { name, lastName, email, password },
                { new: true }
            );
            res.status(200)
            res.json({
                message: `User update ${id}`,
                data: updatedUser
            })
        }
    } catch (err) {
        console.log(err)
        res.status(400)
        res.json({
            message: "server error"
        })

    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const userdb = await users.findById(id)
        if (!userdb) {
            res.status(404)
            res.json({
                message: "user not found"
            })
        } else {
            const respons = await users.findByIdAndDelete(id)
            res.status(200)
            res.json({
                message: "user deleted",
                data: respons
            })
        }
    } catch (err) {
        console.error(err)
        res.status(400)
        res.json({
            message: "server error"
        })
    }
}

module.exports = {
    createUser,
    readAllusers,
    readUser,
    updateUser,
    deleteUser
}