import { useSupabase } from "../hooks/useSupabase";
import MenuItemCard from "../components/MenuItemCard";

export default function MenuPage() {
  const { data: menuItems } = useSupabase("menu_items");

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🍕 Menu Items</h1>

      {menuItems && menuItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems.map(item => (
            <MenuItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
          <p className="text-lg text-gray-700">📋 No menu items found</p>
          <p className="text-sm text-gray-500 mt-2">
            Add items to your Supabase "menu_items" table to display them here.
          </p>
        </div>
      )}
    </div>
  );
}
