import React from 'react'
import Slider from './Slider'

const Testimonials = () => {
  return (
    <section id="reviews" className="bg-dark-yellow border-t-4 border-black pt-6">
        <div className="mx-auto w-full py-20">
        <div className="circle w-[9rem] h-[9rem] bg-red z-10 bg-red left-[20vw]"></div>
        <div className="circle-outline  w-[9rem] h-[9rem] z-10 left-[20vw]"></div>
            <div className="h2 text-blue relative text-center z-40">Words form our members</div>
            <Slider />
        </div>
    </section>
  )
}

export default Testimonials