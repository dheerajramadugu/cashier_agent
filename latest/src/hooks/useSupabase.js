import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export function useSupabase(tableName) {
  const [data, setData] = useState([]);

  // initial fetch
  const fetchData = async () => {
    const { data, error } = await supabase.from(tableName).select("*");
    if (!error) setData(data);
  };

  useEffect(() => {
    fetchData();

    // real-time subscription
    const channel = supabase
      .channel(`table_changes_${tableName}`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: tableName },
        fetchData
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [tableName]);

  return { data, refresh: fetchData };
}
