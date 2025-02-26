const statesService = require('./states.services');

class StatesController {
    getStates = async (req, res, next) => {
        // call service layer method to get states
        // send response back to client
        try {
            const states = await statesService.getStatesService();
            res.status(200).send({
                states: states
            });
        } catch (error) {
            next(error);
        }
    }
}
module.exports = new StatesController();