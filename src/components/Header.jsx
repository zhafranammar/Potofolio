import React, { useState } from "react"
import { Link } from "react-scroll"
import vtx from "../assets/vtx.png"

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleClass = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="container mx-auto fixed md:flex justify-between py-2 max-w-full bg-[#141E27] z-10">
      <div className="flex justify-between items-center px-4">
        <section>
          <Link to="top" smooth={true} duration={500}>
            <img className="w-8 rounded-full" alt="logo" src={vtx} />
          </Link>
        </section>
        <h1 className="text-[#EEEDDE] text-2xl md:px-4 font-tektur">
          Venteux Code
        </h1>

        <div onClick={toggleClass} className="cursor-pointer">
          <svg
            className="stroke-dark-heading md:hidden"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#EEEDDE"
            />
          </svg>
        </div>
      </div>
      <nav
        className={`${
          !isOpen ? "hidden" : ""
        } text-center md:flex justify-between items-center font-adlam`}
      >
        <section>
          <ul className="text-light-content text-[#EEEDDE] font-medium md:flex items-center md:space-x-5 md:mr-10">
            <li className="pb-1 md:pb-0">
              <Link
                to="about"
                smooth={true}
                duration={500}
                onClick={toggleClass}
              >
                About Me
              </Link>
            </li>
            <li className="pb-1 md:pb-0">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                onClick={toggleClass}
              >
                Skills
              </Link>
            </li>
            <li className="pb-1 md:pb-0">
              <Link
                to="experiences"
                smooth={true}
                duration={500}
                onClick={toggleClass}
              >
                Experiences
              </Link>
            </li>
            <li className="pb-1 md:pb-0">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                onClick={toggleClass}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                onClick={toggleClass}
              >
                Contact
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  )
}

export default Header
