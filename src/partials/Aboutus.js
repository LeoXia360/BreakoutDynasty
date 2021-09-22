import React, { useState } from 'react';
import ReactPlayer from "react-player"

import Modal from '../utils/Modal';

function Aboutus() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">



      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Meet Our Team</h1>
            <p className="text-xl text-gray-600">
            </p>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
            <div className="flex flex-col justify-center text-center">
              <a href="https://www.linkedin.com/in/abhiagupta/"><img className="md:max-w-none mx-auto rounded" src={require('../images/abhi_headshot.jpeg').default} width="500" height="462" alt="Features bg" /></a>
              <br></br>
              <h1 className="h2 mb-4">Abhi Gupta</h1>
              <p className="text-xl text-gray-600">Abhi is a Product Manager and Data Scientist at Microsoft HoloLens. He holds a BS in Computer Science with a focus in Machine Learning from Cornell University.</p>
            </div>
            <div className="flex flex-col justify-center text-center">
              <a href="https://www.linkedin.com/in/leoxia96/"><img className="md:max-w-none mx-auto rounded" src={require('../images/leo_headshot.jpeg').default} width="500" height="462" alt="Features bg" /></a>
              <br></br>
              <h1 className="h2 mb-4">Leo Xia</h1>
              <p className="text-xl text-gray-600">Leo is a Software Engineer at Amazon. He holds a BS in Electrical and Computer Engineering from the University of Texas. </p>
            </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Aboutus;
