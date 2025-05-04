export interface OrderItem {
  productId: number;
  qty: number;
  price: number;
  amount: number;
}

export interface Order {
  userName: string;
  address: string;
  city: string;
  state: string;
  pin: string;
  total: number;
  userEmail: string;
  orderDetails: OrderItem[];
}

export interface PastOrder {
  orderId: number;
  userName: string;
  address: string;
  city: string;
  state: string;
  pin: string;
  total: number;
  orderDate: string;
}

export interface PastOrderProduct {
  productId: number;
  productImage: string;
  qty: number;
  price: number;
  amount: number;
  productName: string;
}
