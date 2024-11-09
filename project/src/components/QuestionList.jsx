import React from 'react'
import questions from '../questions.json'
import Question from './Question'

const QuestionList = () => {
  return (
    <section id="info" className="bg-dark-yellow w-full py-16">
        <div className="question-container max-w-5xl grid grid-cols-5 px-4 gap-4 mx-auto">
            <div className="col-span-2">
                <div className="h2 text-black z-20 relative">Frequently asked
                    <span className="text-blue"> questions</span>
                </div>
                <div className="red-line z-10 -top-[0.6rem] left-[2rem]"></div>
            </div>
            
            <div className="col-span-3 flex-col font-mono">
                  {
                      questions.map((quest, index) => {
                          return <Question
                              key={index}
                              id={quest.id}
                              question={quest.question}
                              answer={quest.answer}
                          />
                      })
                    }
            </div>
        </div>
    </section>
  )
}

export default QuestionList