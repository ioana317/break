import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
      <div className="bg-black w-full">
          <div className="max-w-4xl flex flex-col text-center gap-2 h-[90vh] justify-center align-center mx-auto">
              <div className="text-5xl text-white">404 Not Found</div>
              <p className="text-white text-sm">This page does not exist.</p>
              <Link to="/codeBreak" className="text-lg text-yellow text-bold hover:-translate-y-1">Go Back</Link>
          </div>
    </div>
  )
}

export default NotFoundPage