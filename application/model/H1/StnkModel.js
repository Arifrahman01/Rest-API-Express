const Model = require('../../core/mainmodel')
module.exports = {
    customer: () => {
        let query = `select top 10 * from users`
        console.log(query)
        return query
    },
    usertes :() => {
        
    }
}