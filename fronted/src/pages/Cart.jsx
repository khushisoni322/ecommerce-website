const Cart = ({ cart }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto flex gap-6">
        
        <div className="flex-1 space-y-4">
          {cart.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow flex gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h2 className="font-semibold">
                  {item.name}
                </h2>
                <p className="text-green-600 font-bold">
                  ₹ {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-72 bg-white p-4 rounded shadow h-fit">
          <h2 className="font-bold mb-4">
            Price Details
          </h2>
          <p>Total Items: {cart.length}</p>
          <p className="font-bold mt-2">
            Total: ₹ {total}
          </p>
          <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded">
            Checkout
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;