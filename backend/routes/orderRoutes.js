import express from 'express';
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  getOrders,
  update0rderToPaid,
  updateOrderToDelivered
} from '../contollers/ortderController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(protect ,addOrderItems).get(protect, admin, getOrders);
router.route('/mine').get(protect, getMyOrders);
router.route('/:id').get(protect ,getOrderById);
router.route('/:id/pay').put(protect ,update0rderToPaid);
router.route('/:id/deliver').put(protect, admin , updateOrderToDelivered);

export default router;