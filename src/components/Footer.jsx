import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-10 px-6 mt-20">
      {/* Top Section */}
      <div className="text-center pb-5 border-b border-gray-600">
        <button className="text-lg font-semibold hover:text-yellow-400 transition">
          ↑ Back to Top
        </button>
      </div>

      {/* Middle Section - Info Links */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 py-10 px-4">
        <div>
          <h3 className="text-lg font-bold mb-3 text-yellow-400">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">About ShoppyGlobe</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Our Team</li>
            <li className="hover:text-white cursor-pointer">Newsroom</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-yellow-400">Sell with Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Start Selling</li>
            <li className="hover:text-white cursor-pointer">Become a Partner</li>
            <li className="hover:text-white cursor-pointer">Advertise Products</li>
            <li className="hover:text-white cursor-pointer">Merchant Center</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-yellow-400">Support</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Order Tracking</li>
            <li className="hover:text-white cursor-pointer">Return Policy</li>
            <li className="hover:text-white cursor-pointer">Shipping & Delivery</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3 text-yellow-400">Stay Connected</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer">Facebook</li>
            <li className="hover:text-white cursor-pointer">Instagram</li>
            <li className="hover:text-white cursor-pointer">YouTube</li>
            <li className="hover:text-white cursor-pointer">LinkedIn</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} <span className="text-yellow-400 font-semibold">ShoppyGlobe</span>. Crafted with ❤️ in India.
      </div>
    </footer>
  );
};

export default Footer;
