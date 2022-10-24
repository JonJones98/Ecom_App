const IndexController = require('../controller/index.controller');

module.exports = (app)=>{
    app.get('/api',IndexController.index);
}