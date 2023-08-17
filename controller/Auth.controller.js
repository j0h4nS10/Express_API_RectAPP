const mongoose = require('mongoose');
const users = mongoose.model('Users');

const signup = async (req, res) => {
    try {
        const { password } = req.body;
        delete req.body.password;

        const user = new users(req.body);

        user.hashPassword(password);

        await user.save();

        res.status(201)
        res.json({
            message: 'user save',
            data: {
                token: user.generateJWT(),
                info: {
                    name: user.name,
                    lastName: user.lastName
                },
            },
        });
    } catch (err) {
        console.error(err);
        res.status(400)
        res.json({
            message: 'unable to save user',
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await users.findOne({ email });
        if (!user)
            return res.status(404)
        res.json({
            message: 'user not found',
        });
        if (!user.verifyPassword(password))
            return res.status(401)
        res.json({
            message: 'password invalid',
        });

        response.status(200).json({
            message: 'Login succes',
            data: {
                token: user.generateJWT(),
                info: {
                    name: user.name,
                    lastName: user.lastName
                },
            },
        });
    } catch (err) {
        console.error(err);
        res.status(400)
        res.json({
            message: 'server error',
        });
    }
};

module.exports = {
    signup,
    login
};
