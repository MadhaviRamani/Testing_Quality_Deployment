import { useEffect, useState } from "react";
import type { ShippingData } from "../../types";

type ShippingEstimateProps = {
  total: number;
};

export default function ShippingEstimate({ total }: ShippingEstimateProps) {
  const [estimate, setEstimate] = useState<ShippingData | null>(null);

  useEffect(() => {
    let ignore = false;

    async function loadEstimate() {
      const response = await fetch(`/shipping?total=${total}`);
      const data: ShippingData = await response.json();
      if (!ignore) {
        setEstimate(data);
      }
    }

    loadEstimate();

    return () => {
      ignore = true;
    };
  }, [total]);

  if (!estimate) {
    return <p>Calculating shipping …</p>;
  }

  return (
    <p>
      Shipping: {estimate.cost.toFixed(2)} € ({estimate.days} days)
    </p>
  );
}
