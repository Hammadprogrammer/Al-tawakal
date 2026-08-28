export interface LocalOrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  variantName?: string;
  notes?: string;
}

export interface LocalOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  orderType: string;
  orderStatus: string;
  paymentMethod: string;
  deliveryAddress?: string;
  deliveryArea?: string;
  sector?: string;
  houseFlatNo?: string;
  landmark?: string;
  deliveryNotes?: string;
  subtotal: number;
  discountAmount: number;
  deliveryFee: number;
  totalAmount: number;
  createdAt: string;
  branch?: { name?: string; phone?: string; whatsapp?: string } | null;
  orderItems: LocalOrderItem[];
}

const ORDERS_STORAGE_KEY = 'tawakal_orders_v1';
const LAST_ORDER_STORAGE_KEY = 'tawakal_last_order_v1';
const MAX_STORED_ORDERS = 25;

export function generateOrderNumber(): string {
  const randomSuffix = Math.floor(10000 + Math.random() * 90000);
  return `TWK-${randomSuffix}`;
}

export function getStoredOrders(): LocalOrder[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as LocalOrder[]) : [];
  } catch {
    return [];
  }
}

export function storeOrder(order: LocalOrder): void {
  if (typeof window === 'undefined') return;
  try {
    const orders = [order, ...getStoredOrders().filter((o) => o.orderNumber !== order.orderNumber)];
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(orders.slice(0, MAX_STORED_ORDERS)));
    localStorage.setItem(LAST_ORDER_STORAGE_KEY, JSON.stringify(order));
  } catch (err) {
    console.error('Failed to store order locally', err);
  }
}

export function getLastOrder(): LocalOrder | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(LAST_ORDER_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as LocalOrder) : null;
  } catch {
    return null;
  }
}

export function findStoredOrder(orderNumber: string, phone: string): LocalOrder | null {
  const cleanNumber = orderNumber.trim().toUpperCase();
  const cleanPhone = phone.replace(/[^0-9]/g, '').slice(-10);

  const match = getStoredOrders().find(
    (order) =>
      order.orderNumber.toUpperCase() === cleanNumber &&
      order.customerPhone.replace(/[^0-9]/g, '').slice(-10) === cleanPhone
  );

  return match || null;
}
