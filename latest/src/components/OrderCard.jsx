import { supabase } from "../lib/supabaseClient";

export default function OrderCard({ order }) {
  const updateStatus = async (e) => {
    await supabase
      .from("orders")
      .update({ status: e.target.value })
      .eq("id", order.id);
  };

  // Parse order_details if it's a string
  let items = [];
  try {
    const details = typeof order.order_details === 'string' 
      ? JSON.parse(order.order_details) 
      : order.order_details;
    items = Array.isArray(details) ? details : [];
  } catch (e) {
    items = [];
  }

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold">Order #{order.id}</h3>
      <p className="text-sm text-gray-600">📞 {order.customer_phone}</p>
      <div className="mt-3">
        <p className="text-sm font-semibold text-gray-700 mb-2">📋 Items:</p>
        {items.length > 0 ? (
          <ul className="space-y-1 text-sm text-gray-700">
            {items.map((item, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{item.item_name}</span>
                <span className="font-semibold">x{item.quantity}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-xs text-gray-500">No items</p>
        )}
      </div>

      <select
        className="mt-3 p-2 border rounded-md"
        value={order.status}
        onChange={updateStatus}
      >
        <option value="pending">Pending</option>
        <option value="preparing">Preparing</option>
        <option value="ready">Ready</option>
      </select>
    </div>
  );
}
