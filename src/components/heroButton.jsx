import React from 'react';

const Button = ({text}) => {
  return (
    <div className="relative">
      <button className="relative flex justify-center items-center rounded-md bg-[#183153] font-sans shadow-lg overflow-hidden cursor-pointer border-none group">
        <span className="text-center w-full py-[15px] px-[22px] text-white text-lg font-bold tracking-[0.3em] z-20 transition-all duration-300 ease-in-out group-hover:text-[#183153] group-hover:animate-buttonScale">
          {text}
        </span>
        <div className="absolute top-0 right-0 w-0 h-full bg-[#ffd401] transition-all duration-400 ease-in-out group-hover:right-auto group-hover:left-0 group-hover:w-full"></div>
      </button>
    </div>
  );
};

export default Button;