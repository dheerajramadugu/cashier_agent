import { useSupabase } from "../hooks/useSupabase";
import OrderCard from "../components/OrderCard";

export default function OrdersPage() {
  const { data: orders } = useSupabase("orders");

  return (
    <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {orders.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
