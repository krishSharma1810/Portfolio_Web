import React from "react"
import Skillcard from "../components/skillCard"
import Threads from '../components/lines';

const AboutMe = () => {
  const Skills = [
    {
      name: "AI Development"
      ,
      content: "Experienced in developing AI models using TensorFlow and PyTorch, with a focus on adversarial robustness and natural language processing."
    }, {
      name: "Web Development",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium magnam laboriosam assumenda! Aliquid, ad quo recusandae quas "
    }
  ]
  return (
    <section className="relative w-full h-[100vh] bg-gray-900 flex items-center justify-center">
      <div className="absolute inset-0">
        {/* <Threads amplitude={1} distance={0} enableMouseInteraction={false} /> */}
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <h1 className="text-4xl font-bold mb-13">About Me</h1>
        <p className="text-lg mb-18 leading-relaxed">
          I'm a Computer Science Engineering student with a passion for AI and full-stack development. I enjoy solving complex problems and building innovative solutions that make a difference.
        </p>
        <div className="flex justify-center gap-24 ">
          <Skillcard Skills={Skills} />
        </div>
      </div>
    </section>

  )
}

export default AboutMe