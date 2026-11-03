const DAY_IN_MS = 24 * 60 * 60 * 1000;

type ProductCardProps = {
  name: string;
  price: number;
  discount?: number;
  addedAt: string;
};

function formatPrice(value: number) {
  return `${value.toFixed(2)} €`;
}

function isNew(addedAt: string) {
  const ageInDays = (Date.now() - new Date(addedAt).getTime()) / DAY_IN_MS;
  return ageInDays <= 7;
}

export default function ProductCard({
  name,
  price,
  discount = 0,
  addedAt,
}: ProductCardProps) {
  const salePrice = discount > 0 ? price - ((price * discount) / 100) : price;

  return (
    <article className="card">
      <h2>{name}</h2>
      {isNew(addedAt) && <span className="badge" data-testid="new-badge">
        New
      </span>}
      {discount > 0 && <span className="badge">Offer -{discount}%</span>}
      <p>
        {discount > 0 && <s>{formatPrice(price)}</s>}{" "}
        <strong>{formatPrice(salePrice)}</strong>
      </p>
    </article>
  );
}
