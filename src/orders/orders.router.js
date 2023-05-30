const router = require("express").Router();
const { listOrders, createOrder, getOrder, updateOrder, deleteOrder } = require("./orders.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

// TODO: Implement the /orders routes needed to make the tests pass
router
	.route("/")
	.get(listOrders)
	.post(createOrder)
	.all(methodNotAllowed);

router
	.route("/:orderId")
	.get(getOrder)
	.put(updateOrder)
	.delete(deleteOrder)
	.all(methodNotAllowed);

module.exports = router;
