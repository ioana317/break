import React from 'react'

const CourseCard = (content) => {
  return (
    <div className="max-w-sm h-[20rem] min-h-fit bg-white p-6 flex-col justify-evenly card font-mono">
        <div className="text-2xl text-blue font-bold">{content.title}</div>
        <div className="py-2">{content.description}</div>
        <hr />
        <div className="text-sm py-2">
            <div>{content.level}</div>
            <div>{content.type}</div>
            <div>{content.time}</div>
        </div>
        <a href="#plans" className="card-btn bg-yellow text-black px-6 py-2 w-fit flex align-center mx-auto mt-3">Start Learning</a>
    </div>
  )
}

export default CourseCard