import type { Metadata } from 'next';
import { OrderConfirmationClient } from './OrderConfirmationClient';

export const metadata: Metadata = {
  title: 'Order Confirmation',
  description: 'View your order confirmation details and WhatsApp tracking status.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function OrderConfirmationPage() {
  return <OrderConfirmationClient />;
}
