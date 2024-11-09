import React from 'react'
import ReviewCard from './ReviewCard'
import reviews from '../reviews.json'

function leftScroll() {
    document.getElementById("container").scrollLeft -= (container.offsetWidth / 2);
}
function rightScroll() {
    document.getElementById("container").scrollLeft += (container.offsetWidth / 2);
}

const Slider = () => {
  return (
    <div className="flex gap-3 items-center max-w-screen-xl mx-auto py-6 px-2">
          <button onClick={leftScroll} id="left"><img className="min-w-3 hover:-translate-x-1 p-0" src="/images/leftArrow.png" /></button>
          <div id="container" className="flex w-4xl gap-4 scroll-smooth no-scrollbar justify-between items-center overflow-x-scroll">
          {
              reviews.map((person, index) => {
                  return <ReviewCard
                      id={person.id}
                      name={person.name}
                      profession={person.profession}
                      image={person.image}
                      review={person.review}
                      key={index}
                  />
              })
            }
          </div>
          <button onClick={rightScroll} id="right"><img className="min-w-3 hover:translate-x-1 p-0" src="/images/rightArrow.png" /></button>
    </div>
    )
}

export default Slider