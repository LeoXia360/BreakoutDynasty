import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Header() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className="block" aria-label="Cruip">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/breakout-favicon.png').default} width="32" height="32" alt="Features bg" />
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              <li>
<<<<<<< HEAD
                <a href="https://www.youtube.com/channel/UC18-RzuwrIImbaGVjbHoRgw" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Youtube</a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@breakoutdynasty?" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">TikTok</a>
              </li>
              <li>
                <a href="https://twitter.com/BreakoutDynasty" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Twitter</a>
=======
                <Link to="https://www.youtube.com/channel/UC18-RzuwrIImbaGVjbHoRgw" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Youtube</Link>
              </li>
              <li>
                <Link to="https://www.tiktok.com/@breakoutdynasty?" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">TikTok</Link>
              </li>
              <li>
                <Link to="https://twitter.com/BreakoutDynasty" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Twitter</Link>
>>>>>>> c20d3299901409892b4a05f397af91862694783c
              </li>
              {
              //
              // <li>
              //   <Link to="https://www.youtube.com/channel/UC18-RzuwrIImbaGVjbHoRgw" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
              //     <span>Youtube</span>
              //   </Link>
              //   <Link to="https://www.tiktok.com/@breakoutdynasty?" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
              //     <span>TikTok</span>
              //   </Link>
              //   <Link to="https://twitter.com/BreakoutDynasty" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
              //     <span>Twitter</span>
              //   </Link>
              // </li>
            }
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
