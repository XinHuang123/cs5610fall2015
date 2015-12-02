module.exports = function(app, db, mongoose) {

    var model = require("./models/user.model.js") (mongoose, db);
    require("./services/user.service.js")(app, model);

    var formModel = require("./models/form.model.js") (mongoose, db);
    require("./services/form.service.js")(app, formModel);
    require("./services/field.service.js")(app, formModel);

    //var restaurantModel = require("./models/form.model.js") (mongoose, db);
    //require("./services/restaurant.service.js")(app, restaurantModel);

};