import React from 'react'
import Hero from '../components/Hero'
import Investors from '../components/Investors'
import Courses from '../components/Courses'
import FeatureListing from '../components/FeatureListing'
import Bar from '../components/Bar'
import PlanList from '../components/PlanList'
import Testimonials from '../components/Testimonials'
import QuestionList from '../components/QuestionList'
import Join from '../components/Join'


const HomePage = () => {
  return (
      <>
        <Hero />
        <Investors />
        <Courses />
        <FeatureListing />
        <Bar />
        <PlanList />
        <Testimonials />
        <QuestionList />
        <Join />
      </>
  )
}

export default HomePage