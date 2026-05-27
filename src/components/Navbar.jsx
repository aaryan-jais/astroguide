import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">

      <div className="max-w-7xl mx-auto px-5 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-josefin font-bold">
          Astro
          <span className="text-[#D5846E]">
            Guide
          </span>
        </h1>

        <ul className="hidden lg:flex gap-10 items-center">

          {menus.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="hover:text-[#D5846E] duration-300"
            >
              {item.name}
            </Link>
          ))}

          <Link
            to="/login"
            className="border px-6 py-2 rounded"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-[#D5846E] text-white px-6 py-2 rounded"
          >
            Signup
          </Link>

        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {open && (

        <div className="lg:hidden bg-white p-5 space-y-5">

          {menus.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="block"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          <Link to="/login" className="block" onClick={() => setOpen(false)}>
            Login
          </Link>

          <Link to="/signup" className="block" onClick={() => setOpen(false)}>
            Signup
          </Link>

        </div>

      )}

    </header>
  );
}

export default Navbar;