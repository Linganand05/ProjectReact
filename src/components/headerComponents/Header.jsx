import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/selectors/cartSelectors";

const Header = () => {
  const totalCarts = useSelector(selectCartItems);

  return (
    <>
      <header className="flex items-center justify-between py-6 border-b sticky top-0 bg-[#3e233b] px-8">
        <Logo />

        {/* Centered Home Link */}
        <h1 className="text-2xl font-bold text-white absolute left-1/2 transform -translate-x-1/2">
          <Link to="/home">Home</Link>
        </h1>

        <Link to={`/cart`}>
          <div className="relative">
            {/* Inline SVG for Cart Icon */}
            <svg
              className="w-8 h-8 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 6H19L18 14H7L6 6Z" />
              <path d="M6 6L7 14L19 14" />
              <circle cx="10" cy="21" r="2" />
              <circle cx="16" cy="21" r="2" />
            </svg>
            {/* Cart Count Badge */}
            {totalCarts.length !== 0 && (
              <span
                className="absolute right-0 -top-4 bg-yellow-500 min-w-7 h-7 
                flex items-center justify-center rounded-full text-black font-bold"
              >
                {totalCarts.length}
              </span>
            )}
          </div>
        </Link>
      </header>
    </>
  );
};

export default Header;
