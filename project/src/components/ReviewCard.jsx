import React from 'react'

const ReviewCard = (props) => {
  return (
    <div className="border-2 border-black min-w-[28rem] min-h-64 bg-white p-6 z-30 flex-row text-black items-center font-mono">
        <div className="flex justify-between items-center pb-3 px-4">
            <div>
                <div className="text-2xl text-black font-bold">{props.name}</div>
                <div className="text-blue">{props.profession}</div>
            </div>
            <img className="w-20 p-0 shadow" src={props.image} />
        </div>
        <p>{props.review}</p>
    </div>
  )
}

export default ReviewCard