import React from 'react'
import { useState } from 'react'

const Join = () => {
    const [text, setText] = useState("Type in your question...");

  return (
    <section id="join" className="bg-black w-full p-10">
        <div className="join-container max-w-5xl mx-auto bg-blue text-mono text-white p-6 items-center grid grid-cols-2 gap-14">
            <div className="max-w-lg relative">
                <img id="shape" className="absolute w-16 left-32" src="/images/bigPlus.png" />
                <img id="shape-outline" className="absolute w-16 left-32" src="/images/plus-outline.png" />  
                <div className="h2 z-20 py-3"><span className="text-yellow">Join</span><br/>our community</div>
                <p className="z-30 text-mono">Join our <span className="text-yellow">1 million learners</span> and start learning today! Still have questions? Leave us your question and one of our team
                    members will contact you back with additional information!</p>
            </div>
            <div className="bg-white w-full p-8 flex-col items-center justify-center text-black">
                <div className="text-blue font-bold text-lg text-center pb-2">Your question</div>
                <div className="py-2">
                    <label htmlFor="name">Name:<br /></label>
                    <input id="name" type="text" autoComplete='Smith' required placeholder="Your name" className="placeholder-grey rounded bg-transparent-grey p-2" />
                </div>
                <div className="py-2">
                    <label htmlFor="email">Email:<br /></label>
                    <input id="email" type="email" autoComplete='@yahoo.com' required placeholder="Your email" className="placeholder-grey rounded bg-transparent-grey p-2"/>
                </div>
                <div className="py-2 flex-col justify-between">
                    <label htmlFor="quest">Your question:<br /></label>
                      <textarea
                          id="quest"
                          value={text}
                          onChange={(e) => setText(e.target.value)}
                          required
                          className="rounded bg-transparent-grey p-2">
                      </textarea>
                </div>
                <button type="submit" className="mx-auto card-btn text-black flex mt-3">Send Question</button>
            </div>
        </div>
    </section>
  )
}

export default Join