function Contact() {
  return (
    <div className="bg-[#203239] text-white p-10 w-full pb-32" id="contact">
      <form
        action="https://formspree.io/f/moqodvby"
        method="POST"
        className="bg-[#203239] text-[#EEEDDE] w-full max-w-2xl mx-auto"
      >
        <h1 className="text-2xl text- md:text-4xl xl:text-5xl font-tektur text-[#EEEDDE] text-center ">
          Contact Me
        </h1>

        <div className="mb-4">
          <label className="block text-lg mb-2 font-adlam" htmlFor="name">
            Name:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="w-full p-2 border-2 border-gray-200 rounded text-[#203239] font-adlam"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2 font-adlam" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full p-2 border-2 border-gray-200 rounded text-[#203239] font-adlam"
          />
        </div>

        <div className="mb-4">
          <label className="block text-lg mb-2 font-adlam" htmlFor="message">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full p-2 border-2 border-gray-200 rounded h-32 text-[#203239] font-adlam"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-yellow-400 text-gray-800 rounded px-5 py-2 hover:bg-yellow-300"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
