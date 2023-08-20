import React from "react"
import foto from "../assets/foto.png"
import waLogo from "../assets/icons8-whatsapp.svg"
import igLogo from "../assets/icons8-instagram.svg"
import linkedinLogo from "../assets/icons8-linkedin.svg"
import emailLogo from "../assets/icons8-gmail.svg"

function AboutMe() {
  return (
    <section
      id="about"
      className="container mx-auto py-10 px-8 max-w-full pt-20 bg-[#203239] items-center flex flex-col md:flex-row"
    >
      <div
        data-aos="flip-left"
        className="justify-center md:w-1/2 flex flex-col items-center md:items-start"
      >
        <img
          className="w-1/2 rounded-full my-4 mx-auto border-8 border-[#EEEDDE]"
          src={foto}
          alt="foto"
        />
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col justify-center items-center md:items-start md:w-1/2"
      >
        <h2 className="text-2xl text- md:text-4xl xl:text-5xl font-tektur text-[#EEEDDE]">
          About Me
        </h2>
        <p className="text-[#EEEDDE] text-md font-adlam md:text-xl xl:text-2xl pt-2">
          I am a Final Year Computer Science student at Universitas Negeri
          Semarang (UNNES), Indonesia. Specializing in backend web development,
          My career goal is to become a Software Engineer, with an openness to
          exploring opportunities as a Blockchain Developer.
        </p>
        <div className="flex justify-center space-x-4 mt-4 w-full ">
          <a
            href="https://wa.me/6282148873050"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
              src={waLogo}
              alt="WhatsApp"
            />
          </a>
          <a
            href="https://instagram.com/zhafranammar_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
              src={igLogo}
              alt="Instagram"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-zhafran-ammar-ab0b04209/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
              src={linkedinLogo}
              alt="LinkedIn"
            />
          </a>
          <a href="mailto:mzhafranammar@gmail.com">
            <img
              className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
              src={emailLogo}
              alt="Email"
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
