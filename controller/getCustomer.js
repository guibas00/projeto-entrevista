const { getCustomer } = require('../service/customerService.js')
const { validateGetCustomer } = require('../service/businessService.js')
module.exports = async function (req, resp) {
    try {
        validateGetCustomer(req)
        const response = await getCustomer(req)
        resp.status(200).send(response[0])
    } catch (error) {
        resp.status(500).send(error.message)
    }
}
