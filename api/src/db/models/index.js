const {Front, FrontSchema} = require('./frontend.model');

function setupModels(sequelize){
    Front.init(FrontSchema, Front.config(sequelize));
}

module.exports = setupModels;