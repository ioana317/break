import React from 'react'

const Plan = (info) => {
    
    return (
        <div className="max-w-sm bg-white p-6 flex-row gap-4 text-center items-center font-mono card h-fit">
            <div className="text-2xl text-blue font-bold">{ info.type }</div>
            <div className="text-blue text-lg text-red">{info.cost}</div>
            <div className="flex-col py-3">
                {info.features.map((feat, index) => {
                    return ( 
                            <div key={`${index}`} className="flex gap-3 py-1 items-center">
                                    <img className="w-4 p-0" src="/images/check.png" />{feat}
                            </div>
                    )
                })}
            </div>
            <div className="card-btn mx-auto mt-3">Select Plan</div>
        </div>
  )
}

export default Plan