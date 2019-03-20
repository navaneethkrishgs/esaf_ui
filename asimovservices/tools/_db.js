var db = require('../models');

db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
});