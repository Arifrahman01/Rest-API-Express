const Model = require('../../core/mainmodel')
module.exports = {
    customer: (param) => {
        
        let query = `select top 10 * from users`
        console.log(query)
        return query
    },
    tes : () => {
        
        return '';
    }
}