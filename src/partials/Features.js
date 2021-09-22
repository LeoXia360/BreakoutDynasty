import React, { useState, useRef, useEffect } from 'react';
import ReactPlayer from "react-player"

import Transition from '../utils/Transition.js';

function Features() {

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">How The Breakout Works</h1>
            <p className="text-xl text-gray-600">We empower people to learn the very football analytics used by NFL teams. Whether its to make betting models or to win your fantasy leagues, our content makes complex topics easily digestible, even for a beginner.</p>
          </div>

          {/* Section content */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <ReactPlayer url="https://www.youtube.com/watch?v=KD-KjiGZlp4&t=1039s&ab_channel=TheBreakout"/>
              </div>
              <div className="flex flex-col justify-center text-center">
              <h1 className="h2 mb-4">Youtube</h1>
              <p className="text-xl text-gray-600">Full length interviews and podcasts with deep insights into dynasty fantasy football</p>
              </div>
            </div>
          </div>

          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
            </div>
          </div>

          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center text-center">
              <h1 className="h2 mb-4">TikTok</h1>
              <p className="text-xl text-gray-600">Bold 1 minute takes and analysis on player prospects, fantasy moves, and team analysis</p>
              </div>
              <div className="flex flex-col justify-center">
                <img className="md:max-w-none mx-auto rounded" src={require('../images/tiktok_thumbnail.png').default} width="500" height="462" alt="Features bg" />
              </div>
            </div>
          </div>

          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
            </div>
          </div>

          <div>
            <div className="relative flex justify-right mb-8" data-aos="zoom-y-out" data-aos-delay="450">
            <div className="flex flex-col justify-center">
              <img className="md:max-w-none mx-auto rounded" src={require('../images/twitter_thumbnail.png').default} width="500" height="462" alt="Features bg" />
            </div>
              <div className="flex flex-col justify-center text-center">
              <h1 className="h2 mb-4">Twitter</h1>
              <p className="text-xl text-gray-600">Engaging the community through deep dive threads, personal interactions, and answering your questions directly</p>
              </div>
            </div>
          </div>
          </div >
        </div >
    </section >
  );
}

export default Features;
