import { supabase } from "../lib/supabaseClient";

export default function MenuItemCard({ item }) {
  const toggleAvailability = async () => {
    await supabase
      .from("menu_items")
      .update({ is_available: !item.is_available })
      .eq("id", item.id);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <img 
        src={`https://picsum.photos/seed/${item.id}/200/200`} 
        className="rounded-lg mb-3"
      />
      <h2 className="font-semibold text-lg">{item.name}</h2>
      <p className="text-gray-600 mb-2">${item.price}</p>

      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={item.is_available}
          onChange={toggleAvailability}
        />
        <span className="text-sm">Available</span>
      </label>
    </div>
  );
}
