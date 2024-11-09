import React from 'react'
import { useState } from 'react';

const Question = (info) => {
  const [showAnswer, getAnswer] = useState(false);
  let answer = info.answer;
  let btnSrc = showAnswer ? "/images/minus.png" : "/images/plus.png";

  if (!showAnswer) {
    answer = answer.substring(0, 0);
  }

  return (
    <div className="flex gap-4 max-width-lg justify-start items-start">
      <img onClick={() => getAnswer((prevState) => !prevState )} className="cursor-pointer max-w-4 pt-2" src={btnSrc} />
      <div>
        <p className="font-bold py-2">{info.question }</p>
        <p className="">{answer}</p>
      </div>
    </div>
    
  )
}

export default Question