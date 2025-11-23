import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export function useSupabase(table) {
  const [data, setData] = useState([]);

  // Fetch initial data
  const fetchData = async () => {
    const { data, error } = await supabase.from(table).select("*").order("id");

    if (!error) setData(data);
  };

  useEffect(() => {
    fetchData();

    // Real-time listener
    const channel = supabase
      .channel(`${table}-changes`)
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table },
        fetchData
      )
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, [table]);

  return { data };
}
