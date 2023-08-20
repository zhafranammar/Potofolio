import React, { useState } from "react"

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  const projects = [
    {
      id: 1,
      name: "Viatom",
      img: "projects/viatom.png",
      description:
        "Viatom: A Pioneering Achievement in Interactive Education. Recognized nationally, Viatom has secured a spot within the top 20 innovative educational games. This web-based platform, crafted using the robust Laravel framework alongside the advanced Phaser.js and Three.js libraries, offers an innovative approach to learning. Designed as an interactive educational game, Viatom provides a groundbreaking method that significantly enhances students' comprehension. Merging high-quality graphics, real-time simulations, and engaging gameplay, it serves as a testament to the future of interactive and effective educational tools.",
    },
    {
      id: 2,
      name: "Cashier App",
      img: "projects/cashier.jpg",
      description:
        "Cashier-App is a web-based Point of Sale (POS) application designed to assist small and medium enterprises in managing their sales, inventory, and customers. Developed using the Go programming language with PostgreSQL as its database, it boasts a front-end crafted with the React.js library. Engineered to be responsive, this application can be seamlessly accessed across a spectrum of devices including desktops, tablets, and smartphones. Significantly, this project was a part of the MSIB initiative at PT Ruang Raya Indonesia, highlighting its importance and impact",
    },
    {
      id: 3,
      name: "Kanban App",
      img: "projects/kanban-app.jpg",
      description:
        "Kanban App is a web-based task management tool designed to improve workflow efficiency and collaboration among teams. Developed using the Go programming language with PostgreSQL as its database backbone, the front-end is brought to life using the React.js library. Responsive by design, KanbanFlow ensures a seamless experience across a range of devices from desktops to tablets and smartphones. As a standout project within the MSIB initiative at PT Ruang Raya Indonesia, this application demonstrates the innovative strides being taken in the realm of digital task management",
    },
    {
      id: 4,
      name: "HRMS",
      img: "projects/hrm.jpg",
      description:
        "The HRMS (Human Resource Management System) developed as a final project for a specific course provides a comprehensive solution for businesses to streamline their HR processes. Built using the robust Laravel framework and backed by MySQL database, this system encompasses features ranging from recruitment, payroll management, employee data handling, to reporting, all within a cohesive interface. Without relying on a distinct frontend framework, the project harnesses Laravel's native Blade template engine, ensuring a responsive and user-friendly experience.",
    },
    {
      id: 5,
      name: "ELVA",
      img: "projects/chatbot.jpeg",
      description:
        "ELVA, short for Emphatic Life Virtual Assistant, is an innovative chatbot crafted meticulously to revolutionize the health monitoring landscape. Serving as both a health assistant and an information retriever, ELVA empowers users to keep tabs on their well-being and provides instant insights into various health concerns and diseases. At its core, the system leverages the power of Python and integrates cutting-edge machine learning techniques in Natural Language Processing (NLP). This ensures ELVA not only understands user queries with accuracy but responds with empathy, making health information access both seamless and compassionate.",
    },
    {
      id: 6,
      name: "Pharmacy App",
      img: "projects/pharmacist.jpg",
      description:
        "The Pharmacy App, developed during an internship at PT Suitmedia Kreasi Digital, stands as a testament to modern digital healthcare solutions. This comprehensive backend service is bifurcated into two main components: a Content Management System (CMS) and an API. The CMS offers a dynamic platform for pharmacies to manage their inventory, prescriptions, and customer interactions, ensuring seamless backend operations. On the other hand, the API ensures fluid data interchange, facilitating real-time updates and robust integrations with external platforms or applications. As a key project under the aegis of PT Suitmedia Kreasi Digital, this Pharmacy App underscores the company's commitment to driving innovation in the healthcare domain.",
    },
    {
      id: 7,
      name: "Car Rent API",
      img: "projects/car-rent.jpg",
      description:
        "During my internship at PT Suitmedia Kreasi Digital, I worked on the Car-Rent App, a straightforward system designed for car rental businesses. The backend consists of a simple Content Management System (CMS) and an API. The CMS helps businesses manage their vehicle list and customer bookings, while the API ensures data can be accessed and updated as needed. This project was essential in providing a reliable tool for local car rental operators to streamline their operations.",
    },
    {
      id: 8,
      name: "E-Commerce",
      img: "projects/e-commerce.jpg",
      description:
        "At PT Suitmedia Kreasi Digital, one of our prominent projects was developing an E-commerce platform tailored specifically for our client's unique needs. The platform's backend was equipped with a comprehensive Content Management System (CMS) that enabled the client to effortlessly manage products, track orders, and interact with customers. Alongside the CMS, we also integrated a versatile API, ensuring smooth data transactions and enhancing the overall user experience. This client-centric solution was instrumental in propelling their online retail business to new heights.",
    },
  ]

  return (
    <article
      id="projects"
      className="container mx-auto py-10 px-8 max-w-full bg-[#203239] pt-24"
    >
      <h1 className="text-2xl md:text-4xl xl:text-5xl font-tektur text-[#EEEDDE] text-center ">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 ">
        {projects.map((project) => (
          <div
            data-aos="flip-left"
            key={project.id}
            className={`p-4 rounded-lg ${
              selectedProject === project.id ? "bg-[#EEEDDE]" : "bg-[#203239] "
            }`}
            onClick={() =>
              setSelectedProject(
                selectedProject === project.id ? null : project.id
              )
            }
          >
            <img
              src={project.img}
              alt={project.name}
              className="w-full object-cover h-48"
            />
            <h2
              className={`mt-2 text-xl md:text-2xl xl:text-3xl font-tektur ${
                selectedProject === project.id
                  ? "text-[#203239]"
                  : "text-[#EEEDDE] "
              }`}
            >
              {project.name}
            </h2>
            {selectedProject === project.id && (
              <p className="text-[#203239] text-md md:text-lg xl:text-xl font-adlam">
                {project.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </article>
  )
}

export default Projects
