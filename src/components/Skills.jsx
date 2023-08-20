import React from "react"
import html from "../assets/skills/html.png"
import css from "../assets/skills/css.png"
import js from "../assets/skills/js.png"
import react from "../assets/skills/react.png"
import tailwind from "../assets/skills/tailwind.png"
import bootstrap from "../assets/skills/bootstrap.png"
import node from "../assets/skills/node.png"
import golang from "../assets/skills/golang.png"
import python from "../assets/skills/python.png"
import laravel from "../assets/skills/laravel.png"
import mysql from "../assets/skills/mysql.png"
import mongodb from "../assets/skills/mongodb.png"
import postgresql from "../assets/skills/postgre.png"
import vscode from "../assets/skills/vscode.png"
import git from "../assets/skills/git.png"
import github from "../assets/skills/github.png"
import figma from "../assets/skills/figma.png"
import npm from "../assets/skills/npm.png"
import postman from "../assets/skills/postman.png"

function Skilss() {
  return (
    <section
      id="skills"
      className="container mx-auto py-10 px-8 max-w-full bg-[#203239] pt-24"
    >
      <section data-aos="fade-up">
        <h1 className="text-2xl text- md:text-4xl xl:text-5xl font-tektur text-[#EEEDDE] text-center ">
          My Skills
        </h1>
        <p className="text-content py-2 font-adlam text-[#EEEDDE] text-center md:text-xl lg:text-2xl">
          Technologies I've been working with recently
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={html}
          title="html"
          alt=""
        />
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={css}
          title="CSS"
          alt=""
        />
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={js}
          title="JavaScript"
          alt=""
        />
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={react}
          title="React"
          alt=""
        />
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={tailwind}
          title="Tailwind CSS"
          alt=""
        />
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={bootstrap}
          title="Bootstrap"
          alt=""
        />
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={node}
          title="Redux"
          alt=""
        />
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={golang}
          title="Golang"
          alt=""
        />
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={python}
          title="Python"
          alt=""
        />
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={laravel}
          title="Laravel"
          alt=""
        />
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={mysql}
          title="MySQL"
          alt=""
        />
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={mongodb}
          title="MongoDB"
          alt=""
        />
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={postgresql}
          title="PostgreSQL"
          alt=""
        />
      </section>
      <section>
        <h1
          data-aos="fade-up"
          className="text-2xl text-[#EEEDDE] md:text-4xl xl:text-5xl xl:leading-tight font-tektur text-center py-10"
        >
          Tools
        </h1>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-10 pt-6">
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={vscode}
          title="Visual Studio Code"
          alt=""
        />
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={git}
          title="Git"
          alt="Git"
        />
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={github}
          title="Github"
          alt="Github"
        />
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={figma}
          title="Figma"
          alt="Figma"
        />
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={npm}
          title="NPM"
          alt="NPM"
        />
        <img
          className="justify-self-center"
          data-aos="flip-left"
          src={postman}
          title="Postman"
          alt="Postman"
        />
      </section>
    </section>
  )
}

export default Skilss
