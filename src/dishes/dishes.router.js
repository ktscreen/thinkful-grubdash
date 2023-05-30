const router = require("express").Router();
const { listDishes, createDish, getDish, updateDish } = require("./dishes.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// TODO: Implement the /dishes routes needed to make the tests pass
router
	.route("/")
	.get(listDishes)
	.post(createDish)
	.all(methodNotAllowed);

router
	.route("/:dishId")
	.get(getDish)
	.put(updateDish)
	.all(methodNotAllowed);

module.exports = router;
