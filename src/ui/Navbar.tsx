import { Link } from "react-router";

function Navbar() {
  return (
    <nav className="bg-gray-100 shadow-sm py-2">
      <div className="container mx-auto flex justify-center gap-4">
        <Link to="/" className="text-blue-600 hover:underline">
          Home
        </Link>
        <Link to="/about" className="text-blue-600 hover:underline">
          Reservations
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
