import { useSupabase } from "../hooks/useSupabase";
import MenuItemCard from "../components/MenuItemCard";

export default function MenuPage() {
  const { data: menuItems } = useSupabase("menu_items");

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
      {menuItems.map(item => (
        <MenuItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
