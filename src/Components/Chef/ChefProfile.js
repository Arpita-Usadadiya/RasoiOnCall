import { useEffect, useState, useCallback } from "react";

const fetchSmartChefs = useCallback(async () => {
  try {
    setLoading(true);
    const query = new URLSearchParams(filters).toString();
    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/chef/smart-match?${query}`
    );
    const data = await res.json();

    if (Array.isArray(data)) setChefs(data);
    else if (Array.isArray(data.data)) setChefs(data.data);
    else setChefs([]);
  } catch (err) {
    setChefs([]);
  } finally {
    setLoading(false);
  }
}, [filters]);
