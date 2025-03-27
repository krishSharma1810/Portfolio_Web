import Skillcard from "../components/skillCard"

const AboutMe = () => {
  const Skills = [
    {
      name: "AI Development",
      content:
        "Experienced in developing AI models using TensorFlow and PyTorch, with a focus on adversarial robustness and natural language processing.",
    },
    {
      name: "Web Development",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam laboriosam assumenda! Aliquid, ad quo recusandae quas ",
    },
  ]
  return (
    <section className="relative w-full min-h-screen py-16 flex items-center justify-center">
      <div className="absolute inset-0">
        {/* <Threads amplitude={1} distance={0} enableMouseInteraction={false} /> */}
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white dark:text-white text-gray-900 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-13">About Me</h1>
        <p className="text-base sm:text-lg mb-10 sm:mb-18 leading-relaxed">
          I'm a Computer Science Engineering student with a passion for AI and full-stack development. I enjoy solving
          complex problems and building innovative solutions that make a difference.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24">
          <Skillcard Skills={Skills} />
        </div>
      </div>
    </section>
  )
}

export default AboutMe

