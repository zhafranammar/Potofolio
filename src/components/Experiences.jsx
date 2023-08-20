import React from "react"

function Experiences() {
  const [experiences, setExperiences] = React.useState([])

  React.useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbxTV2NyMi7yr9rhpYG29VpCx0kRJNrxa2aiQ0KN3ruwnHTWDdxAUSoYAFGZDkn_zGM/exec"
    )
      .then((response) => response.json())
      .then((json) => setExperiences(json.experiences))
  }, [])

  return (
    <article
      id="experiences"
      className="container mx-auto py-10 px-8 max-w-full bg-[#203239] pt-24 pb-5"
    >
      <h1 className="text-2xl text- md:text-4xl xl:text-5xl font-tektur text-[#EEEDDE] text-center ">
        My Experiences
      </h1>
      {experiences.map((experience, index) => (
        <div key={index} className="py-4" data-aos="fade-up">
          <div className="flex justify-between items-center">
            <h1 className="text-[#EEEDDE] md:text-lg lg:text-xl font-tektur">
              {experience.Position}
            </h1>
            <div className="text-[#EEEDDE] text-xs inline-block rounded-3xl px-3 py-1 min-w-fit font-adlam">
              {experience["Type Job"]}
            </div>
          </div>
          <div className="flex justify-between pt-2">
            <div className="flex flex-col md:flex-row">
              <div className="flex items-center pr-5">
                <p className="text-[#EEEDDE] text-xs md:text-sm font-light pl-1 font-adlam">
                  {experience.Company}
                </p>
              </div>
              <div className="flex items-center">
                <p className="text-[#EEEDDE] text-xs md:text-sm font-light pl-1 font-adlam">
                  {experience.Location}
                </p>
              </div>
            </div>
            <p className="text-[#EEEDDE] text-xs md:text-sm font-light pl-1 min-w-fit font-adlam">
              {experience.Duration}
            </p>
          </div>
        </div>
      ))}
    </article>
  )
}

export default Experiences
