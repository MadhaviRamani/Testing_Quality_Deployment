import ProductCard from "./components/ProductCard";

export default function App() {
  return (
    <>
      <ProductCard name="Coffee Grinder" price={80} addedAt="2026-01-10" />
      <ProductCard
        name="Espresso Machine"
        price={400}
        discount={25}
        addedAt={new Date().toISOString()}
      />
    </>
  );
}
