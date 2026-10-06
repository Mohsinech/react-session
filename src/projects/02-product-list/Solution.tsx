// ✅ CONCEPT: Rendering lists with .map() — each item needs a unique "key".

const products = [
  { id: 1, title: "Laptop", price: 900, image: "💻" },
  { id: 2, title: "Headphones", price: 120, image: "🎧" },
  { id: 3, title: "Keyboard", price: 75, image: "⌨️" },
  { id: 4, title: "Mouse", price: 25, image: "🖱️" },
];

function ProductCard({
  product,
}: {
  product: { id: number; title: string; price: number; image: string };
}) {
  return (
    <div className="card">
      <div style={{ fontSize: 48 }}>{product.image}</div>
      <h3>{product.title}</h3>
      <p style={{ fontWeight: "bold", color: "#7c3aed" }}>${product.price}</p>
      <button className="btn">Add to cart</button>
    </div>
  );
}

export default function Solution() {
  return (
    <div className="grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
