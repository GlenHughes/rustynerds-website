import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import logo from "../images/logo.png"

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav className="bg-red-600">
      <div className="flex flex-wrap items-center justify-between max-w-4xl mx-auto p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline text-white">
          <span className="font-bold text-xl tracking-tight">{siteTitle}</span>
        </Link>

        <Link to="/">
          <img src={logo} className="logo" alt={siteTitle} />
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex md:items-center w-full md:w-auto`}
        >
          <div className="text-sm">
            <Link
              to="/servers"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              Servers
            </Link>
            <Link
              to="/stats"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              Stats
            </Link>
            <Link
              to="/discord"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              Discord
            </Link>
            {/* <Link
              to="/map"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              Map
            </Link> */}
            <Link
              to="/steam"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              Steam
            </Link>
            <Link
              to="/shop"
              className="block md:inline-block mt-4 md:mt-0 no-underline text-white"
            >
              Shop
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
