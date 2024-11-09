import React from 'react'

const FeatureListing = () => {
  return (
    <section id="features" className="h-fit bg-black text-white mx-auto w-full py-20 px-10">
      <div className="h2 text-5xl text-center p-4 z-20 relative">
        <span className="text-yellow">Effective</span>, hands-on learning
      </div>
        <div className="red-line z-10 left-[56vw] -top-6"></div>
      
            
      <div className="circle bg-blue w-[10rem] h-[10rem] z-10 left-[80vw]"></div>
      <div className="circle-outline w-[10rem] h-[10rem] z-10 left-[80vw]"></div>
      <div className="max-w-screen-xl flex-col p-4 mx-10 z-30 mx-auto min-h-fit">
          <div className="py-5 mx-auto w-full font-mono">
              <div className="flex justify-between items-center font-bold">
                    <div className="z-40 h3 text-blue bg-white py-1 px-3 max-w-fit border-2 border-yellow">AI-Assisted Learning</div>
                    <div className="text-md text-yellow boogie z-30">//1</div>
              </div>
              <div className="bg-yellow h-1 w-full relative -top-2 z-30"></div>
              <div className="grid grid-cols-3">
                    <div className="col-span-2 gap-5 text-p-white py-5 divide-y-2 divide-yellow">
                        <p className="py-3 ">Introducing CodeBreak's AI Learning Assistant, your personalized guide to mastering programming languages. The AI assistant leverages advanced artificial intelligence to provide a customized and interactive learning experience, ensuring you get the most out of every coding session.</p>
                        <p className="py-3">The AI Learning Assistant optimizes your study time by focusing on areas where you need the most improvement, accelerating your learning process and maximizing productivity.</p>
                    </div>    
              </div>        
          </div>               
          <div className="py-5 mx-auto w-full font-mono">
              <div className="flex justify-between items-center font-bold">
                    <div className="text-md text-yellow boogie z-30">//2</div>
                    <div className="z-40 h3 text-blue bg-white py-1 px-3 max-w-fit border-2 border-yellow">Mobile IDE</div>
              </div>
              <div className="bg-yellow h-1 w-full relative -top-2 z-30"></div>
              <div className="grid grid-cols-3">
                    <div className="col-span-2 gap-5 text-p-white py-5 divide-y-2 divide-yellow text-right col-start-2">
                        <p className="py-3 ">Our revolutionary Mobile Integrated Development Environment feature empowers you to code anytime, anywhere, directly from your mobile device. Say goodbye to limitations and hello to unprecedented freedom in your coding journey.</p>
                        <p className="py-3">The AI Learning Assistant optimizes your study time by focusing on areas where you need the most improvement, accelerating your learning process and maximizing productivity.</p>
                    </div>    
              </div>        
          </div>    
          <div className="py-5 mx-auto w-full font-mono">
              <div className="flex justify-between items-center font-bold">
                    <div className="z-40 h3 text-blue bg-white py-1 px-3 max-w-fit border-2 border-yellow">Integrated Reference Docs</div>
                    <div className="text-md text-yellow boogie z-30">//3</div>
              </div>
              <div className="bg-yellow h-1 w-full relative -top-2 z-30"></div>
              <div className="grid grid-cols-3">
                    <div className="col-span-2 gap-5 text-p-white py-5 divide-y-2 divide-yellow">
                        <p className="py-3">Extend your knowledge with our built-in resource that provides detailed explanations of programming terms and concepts. This feature is designed to enhance your learning experience by offering immediate access to valuable information directly within the platform.</p>
                        <p className="py-3">Stay current with the latest programming practices as the reference docs are regularly updated to include new terms and evolving concepts.</p>
                    </div>    
              </div>        
          </div>              
      </div>
    </section>
  )
}

export default FeatureListing