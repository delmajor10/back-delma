const Order = require('../../domain/entities/order.entity');

class OrderService {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    
    async getAllOrders() {
        return this.orderRepository.getAll();
    }

    async getOrderById(id) {
        return this.orderRepository.getById(id);
    }

    async createOrder(orderData) {

        const orderEntity = new Order(
            null, // id se genera en BD
            orderData.product,
            orderData.description,
            orderData.quantity,
            orderData.price,
            orderData.discount,
            orderData.total,
            orderData.date 
        );

        return this.orderRepository.create(orderEntity);
    }

    async updateOrder(id, orderData) {
        const orderEntity = new Order(
            id,
            orderData.product,
            orderData.description,
            orderData.quantity,
            orderData.price,
            orderData.discount,
            orderData.total,
            orderData.date
        );

        return this.orderRepository.update(id, orderEntity);
    }

    async deleteOrder(id) {
        return this.orderRepository.delete(id);
    }
}

module.exports = OrderService;
