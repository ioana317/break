import React from 'react'
import CourseCard from './CourseCard'
import courses from '../courses.json'

const Courses = (
    {
        description = 'All of our courses are crafted by award-winning teachers, researchers, professionals from MIT, Duke, Microsoft, Google, and more.',
    }
) => {
  return (
    <section id="courses" className="bg-black mx-auto w-full py-20 flex-col justify-center items-center px-10">
        <div className="mx-auto text-white text-center max-w-2xl pb-4">
            <div className="h2"><span className="text-yellow">Popular</span> Courses</div>
            <div className="text-white font-mono py-3">{ description }</div>
        </div>

        <div className="course-container flex justify-center items-center gap-6 max-w-screen-xl mx-auto">
            {
                courses.map((course, index) => {
                    return <CourseCard
                        key={index}
                        title={course.title}
                        description={course.description}
                        level={course.level}
                        type={course.type}
                        time={course.time}
                    />
                })
            }
        </div>
    </section>
  )
}

export default Courses