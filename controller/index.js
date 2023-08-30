const usersControllers = require('./user.controller')
const AuthControllers = require('./Auth.controller')
const productControllers = require('./products.controller')

console.log(usersControllers)

module.exports = {
    ...usersControllers,
    ...AuthControllers,
    ...productControllers
}