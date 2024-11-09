import React from 'react'

const Hero = () => {
    return (
      <>
        <div id="hero" className="hero container-lg w-full mx-auto h-fit bg-black py-56 px-10">
          <div className="container-sm relative max-w-screen-lg min-h-80 mx-auto flex flex-col justify-center">
            <div className="circle bg-blue w-[8rem] h-[8rem] top-[3rem] z-10 left-[6rem]"></div>
            <div className="circle-outline w-[8rem] h-[8rem] top-[3rem] z-10 left-[6rem]"></div>
              <div className="text-8xl text-white h1 z-20 pl-32">Learn to</div>
              <div className="text-8xl text-white h1 text-center z-20">code with</div>
              <div className="text-9xl text-yellow text-center h1-exception pl-16 z-20">codeBreak.</div>
              <div className="white-line z-10 self-center -top-6"></div>
              <div className="hero-cta w-full items-center py-6 flex justify-between">
              <div className="text-p-white max-w-md font-mono z-20 relative">Learn the latest coding technologies with interactive, hands-on courses.</div>
                <a className="btn bg-yellow text-black py-2 px-6 z-30" href="#plans">Get Started</a>
            </div>
            </div>
        </div>
      </>
  )
}

export default Hero