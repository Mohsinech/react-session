// 🎯 GOAL: Render a list of products from an ARRAY using .map()
//
// TODO 1: Create a type Product with: id (number), title (string), price (number), image (string)
// TODO 2: Type the products array below as Product[]
// TODO 3: Use products.map() to render one card per product
// TODO 4: Don't forget the "key" prop on each card! (use product.id)

const products = [
  { id: 1, title: "Laptop", price: 900, image: "💻" },
  { id: 2, title: "Headphones", price: 120, image: "🎧" },
  { id: 3, title: "Keyboard", price: 75, image: "⌨️" },
  { id: 4, title: "Mouse", price: 25, image: "🖱️" },
];

export default function Starter() {
  console.log(products); // remove this when you use the array

  return (
    <div className="grid">
      {/* map over products here */}
    </div>
  );
}
