export type Product = {
  id: number;
  title: string;
  price: number;
};

export async function getProduct(id: number): Promise<Product> {
  let response: Response;

  try {
    response = await fetch(`https://dummyjson.com/products/${id}`);
  } catch {
    throw new Error("Could not reach the product service");
  }

  if (!response.ok) {
    throw new Error(`Product ${id} not found`);
  }

  return response.json();
}

export async function getProductTitles(ids: number[]): Promise<string[]> {
  const products = await Promise.all(ids.map((id) => getProduct(id)));

  return products.map((product) => product.title);
}
