import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  return (
    <div className="bg-blue-600 text-white py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        
        <Link to="/" className="text-2xl font-bold">
          MyShop
        </Link>

        <input
          type="text"
          placeholder="Search for products..."
          className="w-1/2 px-4 py-2 rounded text-black"
        />

        <Link
          to="/cart"
          className="bg-white text-blue-600 px-5 py-2 rounded font-semibold"
        >
          Cart ({cartCount})
        </Link>

      </div>
    </div>
  );
}

export default Navbar;