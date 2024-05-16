import { useState, useEffect } from "react";
import { Result } from "../types/pokemon.types";
import { getData } from "../services/getData";

export default function useApi() {
  const [data, setData] = useState<Result[]>([]);

  useEffect(() => {
    getData("https://pokeapi.co/api/v2/pokemon?limit=10").then((data) => {
      setData(data.results);
    });
  }, []);

  return {
    data,
  }
}