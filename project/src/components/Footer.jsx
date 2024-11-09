import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t-2 border-white px-10">
        <div className="text-white mx-auto pt-10 ">
            <ul className="flex justify-evenly pb-10 text-yellow">
                <a href="#courses"><li>Courses</li></a>
                <a href="#features"><li>Features</li></a>
                <a href="#plans"><li>Plans</li></a>
                <a href="#reviews"><li>Reviews</li></a>
                <a href="#info"><li>Info</li></a>
            </ul>

            <div className="flex justify-between items-end py-5">
                <ul className="legal-links flex gap-3 text-sm">
                    <a href="#">
                        <p>Privacy Policy</p>
                    </a>
                    <a href="#">
                        <p>Cookie Policy</p>
                    </a>
                    <a href="#">
                        <p>Terms and Conditions</p>
                    </a>
                </ul>
                <div className="text-p-white text-sm min-w-fit">All rights are reserved © 2024 codeBreak</div>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer