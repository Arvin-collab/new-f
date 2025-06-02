import { useQuery } from "@tanstack/react-query";

/**
 * Returns exchange rates with base EUR and a helper to convert any amount to EUR.
 */
export const useCurrencyRates = () => {
  const query = useQuery<{ [k: string]: number }>(
    ["currencyRates"],
    async () => {
      const res = await fetch("https://api.exchangerate.host/latest?base=EUR");
      if (!res.ok) throw new Error("Failed to fetch currency rates");
      const data = await res.json();
      return data.rates as Record<string, number>;
    },
    {
      staleTime: 60 * 60 * 1000, // 1h
      refetchOnWindowFocus: false,
    }
  );

  const convertToEUR = (amount: number, currency: string): number => {
    if (currency.toUpperCase() === "EUR") return amount;
    const rate = query.data?.[currency.toUpperCase()];
    if (!rate) return amount; // fallback if unknown currency
    return amount / rate;
  };

  return { ...query, convertToEUR };
}; 