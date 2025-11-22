import { supabase } from "../lib/supabaseClient";

export default function OrderCard({ order }) {
  const updateStatus = async (e) => {
    await supabase
      .from("orders")
      .update({ status: e.target.value })
      .eq("id", order.id);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <h3 className="font-bold">Order #{order.id}</h3>
      <p className="text-sm text-gray-600">📞 {order.customer_phone}</p>
      <p className="mt-2 text-gray-900">
        🧾 {order.order_details}
      </p>

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
