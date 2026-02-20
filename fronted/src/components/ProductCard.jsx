const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="bg-white shadow rounded p-4 hover:shadow-lg transition">
      
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />

      <h2 className="mt-3 font-semibold">
        {product.name}
      </h2>

      <p className="text-green-600 font-bold">
        ₹ {product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="mt-3 w-full bg-yellow-400 hover:bg-yellow-500 py-2 rounded font-semibold"
      >
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;