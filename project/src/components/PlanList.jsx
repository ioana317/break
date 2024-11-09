import React from 'react'
import Plan from './Plan'
import planInfo from '../plans.json'

const PlanList = () => {
  return (
    <section id="plans" className="bg-black flex-row mx-auto w-full justify-center items-center pt-6 ">
            <div className="h2 text-white py-5 mx-auto text-center">Choose a 
                <span className="text-yellow"> plan</span>
            </div>

            <div className="plan-container gap-6 flex justify-center items-center mx-auto max-w-screem-xl px-10">
              {
                  planInfo.map((plan, index) => {
                      return <Plan
                          type={plan.type}
                          cost={plan.cost}
                          features={plan.features}
                          key={index}
                      />
                  })
                }  
          </div>
        </section>

  )
}

export default PlanList