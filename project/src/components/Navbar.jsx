import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { name: "Courses", link: '#courses' },
    { name: "Features", link: '#features' },
    { name: "Plans", link: '#plans' },
    { name: "Reviews", link: '#reviews' },
    { name: "Info", link: '#info' },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  function menuClick() {
    setOpenMenu(!openMenu);
  }

  return (
    <>
      <nav className="fixed w-full px-10 py-2 bg-black z-50 border-b border-white top-0">
      <div className="flex justify-between items-center mx-auto z-40">
        <a href="#hero" className="text-2xl text-yellow logo">codeBreak</a>
          <ul className="navbar flex justify-evenly items-center text-white font-mono">
            {
              navLinks.map((nav, index) => {
                return <li key={ index}  className={useLocation().hash === nav.link ? "text-yellow" : ""}><a href={nav.link}>{nav.name}</a></li>
              })
            }
        </ul> 
        <div className="hamburger hidden">
          <img className="cursor-pointer" onClick={menuClick} src={openMenu ? "public/images/close.png" :  "public/images/menu.png"} />
        </div>
      </div>
      </nav>
      {openMenu && (
        <ul onClick={menuClick} className="small-menu fixed top-[2rem] p-10 flex flex-col gap-6 text-center text-white font-mono text-2xl bg-black w-screen h-screen z-50">
            <li><a href="#courses">Courses</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#plans">Plans</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#info">Info</a></li>
          </ul>
      )} 
    </>
  )
}

export default Navbar