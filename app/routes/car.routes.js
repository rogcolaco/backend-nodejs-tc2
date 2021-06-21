module.exports = app => {
    const car = require("../controller/car.controller.js");
    var router = require("express").Router();

    router.post("/", car.add);
    router.get("/", car.findAll);
    router.get("/:id", car.find);
    router.put("/:id", car.update);
    router.delete("/:id", car.delete);

    app.use('/api/cars', router);

};