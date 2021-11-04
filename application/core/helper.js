const config = require('../preferences/config')
const sql = require('mssql')
module.exports = {
    execute: (query) => {
        return new Promise(async(resolve, reject) => {
            try {
                let pool = await sql.connect(config)
                let result = await pool.request().query(query)
                resolve({
                    status: true,
                    message: result.recordset,
                    // totalData: result.recordset.length
                })
            } catch (error) {
                console.log(error)
                reject({
                    status: false,
                    message: error.originalError.info.message,
                    totalData: 0
                })
            }
        })
    }
}