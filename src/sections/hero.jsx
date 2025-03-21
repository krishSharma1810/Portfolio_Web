"use client";
import React from 'react'
import Particles from "../components/particles"
import SplitText from "../components/hello";
import TypewriterEffectSmooth from "../components/typwriter-effect";
import HeroButton from "../components/heroButton"
import GoDownBtn from "../components/goDownBtn"

const hero = () => {

  const handleAnimationComplete = () => {

    console.log('All letters have animated!');

  };

  const words = [
    {
      text: "AI Engineer | Web Developer.",
    },

  ];


  return (
    <>
      <div className="relative w-full h-screen bg-gray-900 flex justify-center items-center">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <div
          className="absolute flex flex-col items-center justify-center text-amber-50"
        >
          <SplitText
            text="Hello, I am Krish Sharma"
            className="text-8xl font-semibold text-center"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
          <div className="mt-5">
            <TypewriterEffectSmooth words={words} />
          </div>

          <p className="text-gray-300 mb-8 text-lg">
            Passionate about developing robust AI solutions and creating seamless web experiences.
          </p>

          <div
            className='flex gap-3'
          >
            <HeroButton text={"Get In Touch"} />
            <HeroButton text={"View Projects"} />
          </div>
          <div className='absolute bottom-[-80%]'>
            <GoDownBtn />
          </div>
        </div>
      </div>
    </>

  )
}

export default hero


