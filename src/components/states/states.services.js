const stateDal = require('./states.dal');

class StateService{
    getStatesService = async () => {
        // get db client here 
        try {
          // pass dbclient in paramater
          const states = await stateDal.getStates();
          return states;
        } catch (error) {
            throw error;
        }
    }
}
module.exports = new StateService();