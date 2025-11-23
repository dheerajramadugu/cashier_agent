import { useSupabase } from "../hooks/useSupabase";
import OrderCard from "../components/OrderCard";

export default function OrdersPage() {
  const { data: orders } = useSupabase("orders");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">📋 Orders</h1>
      {orders && orders.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      ) : (
        <div className="bg-green-50 p-8 rounded-lg border border-green-200">
          <p className="text-lg text-gray-700">📋 No orders yet</p>
          <p className="text-sm text-gray-500 mt-2">New orders will appear here. Make sure your Supabase "orders" table is set up.</p>
        </div>
      )}
    </div>
  );
}
