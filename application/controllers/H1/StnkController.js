const model = require("../../model/H1/CustomerModel");
const { execute } = require('../../core/helper')

const Controller = require('express').Router()

Controller.get('/customer', async function(request, res) {
    const result = await execute(model.customer()).then(data => {
        return data
    }).catch(error => {
        return error
    })
    res.json(result)
})

module.exports = Controller