import { supabase } from "../lib/supabaseClient";
import { useState } from "react";

export default function MenuItemCard({ item }) {
  const [available, setAvailable] = useState(item.is_available);

  const toggleAvailability = async () => {
    const newValue = !available;
    setAvailable(newValue); // Optimistic UI

    const { error } = await supabase
      .from("menu_items")
      .update({ is_available: newValue })
      .eq("id", item.id);

    if (error) {
      // revert if failed
      setAvailable(!newValue);
      alert("Failed to update availability");
    }
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <img
        src={`https://picsum.photos/seed/${item.id}/300/200`}
        className="rounded-lg mb-3 w-full h-40 object-cover"
      />

      <h2 className="font-semibold text-lg">{item.name}</h2>
      <p className="text-gray-600 mb-2">${item.price}</p>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          className="h-4 w-4"
          checked={available}
          onChange={toggleAvailability}
        />
        <span className="text-sm">
          {available ? "Available" : "Unavailable"}
        </span>
      </label>
    </div>
  );
}
