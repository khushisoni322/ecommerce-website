import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { API_URL } from "../config";
const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(
        `${API_URL}/api/products`
      );
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const categories = [
    "All",
    ...new Set(products.map((p) => p.category)),
  ];

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (p) => p.category === selectedCategory
        );

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto flex gap-6 p-6">
        
        {/* Sidebar */}
        <div className="w-64 bg-white p-4 rounded shadow">
          <h2 className="font-bold mb-4">Categories</h2>
          {categories.map((cat) => (
            <div
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cursor-pointer mb-2 p-2 rounded ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {cat}
            </div>
          ))}
        </div>

        {/* Products */}
        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;