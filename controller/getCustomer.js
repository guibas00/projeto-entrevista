const { getCustomer } = require('../service/customerService.js')
const { validateGetCustomer } = require('../service/businessService.js')
module.exports = async function (req, resp) {
    try {
        validateGetCustomer(req)
        resp.status(200).send(await getCustomer(req))
    } catch (error) {
        resp.status(500).send(error.message)
    }
}
