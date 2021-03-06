import React, { useState } from 'react';
import ReactPlayer from "react-player"

import Modal from '../utils/Modal';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">



      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">The Breakout</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Modern analytics for fantasy football, made simple.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-red-500 hover:bg-red-700 w-full mb-4 sm:w-auto sm:ml-4" href="https://www.youtube.com/channel/UC18-RzuwrIImbaGVjbHoRgw">Youtube</a>
                </div>
                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-700 w-full mb-4 sm:w-auto sm:ml-4" href="https://www.tiktok.com/@breakoutdynasty?">TikTok</a>
                </div>
                <div>
                  <a className="btn text-white bg-blue-500 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:ml-4" href="https://twitter.com/BreakoutDynasty">Twitter</a>
                </div>

              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <ReactPlayer url="https://www.youtube.com/watch?v=WdfaqCspLAc&t=101s"/>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;
