const { Router } = require('express');
const OrderController = require('../controller/order.controller');
const authenticateToken = require('../middlewares/auth.middleware');
const isAdmin = require('../middlewares/admin.middleware');

// Inyección de dependencias manual
const OrderService = require('../../application/use-cases/order.service');
const OrderMongoRepository = require('../../infrastructure/repositories/database/mongo/order.mongo.repository');

const orderRepository = new OrderMongoRepository();
const orderService = new OrderService(orderRepository);
const orderController = new OrderController(orderService);

const router = Router();

router.get('/', orderController.getAll);
router.get('/:id', orderController.getById);
// router.post('/', orderController.create);
// router.put('/:id', orderController.update);
// router.delete('/:id', orderController.delete);

router.post('/', [authenticateToken, isAdmin], orderController.create);
router.put('/:id', [authenticateToken, isAdmin], orderController.update);
router.delete('/:id', [authenticateToken, isAdmin], orderController.delete);

module.exports = router;