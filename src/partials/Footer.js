import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              {/* Logo */}
              <Link to="/" className="inline-block" aria-label="Cruip">
                <img className="md:max-w-none mx-auto rounded" src={require('../images/breakout-favicon.png').default} width="32" height="32" alt="Features bg" />
              </Link>
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Products</h6>
            <ul className="text-sm">
              <li className="mb-2">
<<<<<<< HEAD
                <a href="https://www.youtube.com/channel/UC18-RzuwrIImbaGVjbHoRgw" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Youtube</a>
              </li>
              <li className="mb-2">
                <a href="https://www.tiktok.com/@breakoutdynasty?" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">TikTok</a>
              </li>
              <li className="mb-2">
                <a href="https://twitter.com/BreakoutDynasty" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Twitter</a>
=======
                <Link to="https://www.youtube.com/channel/UC18-RzuwrIImbaGVjbHoRgw" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Youtube</Link>
              </li>
              <li className="mb-2">
                <Link to="https://www.tiktok.com/@breakoutdynasty?" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">TikTok</Link>
              </li>
              <li className="mb-2">
                <Link to="https://twitter.com/BreakoutDynasty" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Twitter</Link>
>>>>>>> c20d3299901409892b4a05f397af91862694783c
              </li>
            </ul>
          </div>

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Company</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</Link>
              </li>
              <li className="mb-2">
                <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About us</Link>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
