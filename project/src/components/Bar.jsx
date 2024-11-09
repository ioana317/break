import React from 'react'

const Bar = () => {
    const features = ['Progress statistics', 'Unlimited practice', 'Daily goals', 'Ad-free experience', 'Habit building'];
  return (
      <>
          <div className="flex bg-white text-center justify-evenly px-4 border-y-2 border-yellow">
              {features.map((feat, index) => {
                  return <div key={`${index}`} className="py-6 px-2 font-bold text-blue font-mono">{ feat }</div>
              })}
        </div>
      </>
  )
}

export default Bar