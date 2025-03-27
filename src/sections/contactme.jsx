import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi"
import Contactlinks from "../components/contactlinks"

const ContactMe = () => {
  const items = [
    { icon: <FiGithub size={24} />, color: "blue", label: "GitHub", link: "https://github.com/krishSharma1810" },
    {
      icon: <FiLinkedin size={24} />,
      color: "purple",
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/krish-sharma-669048241",
    },
    { icon: <FiMail size={24} />, color: "red", label: "Email", link: "mailto:sharmakrish1810work@gmail.com" },
    { icon: <FiPhone size={24} />, color: "green", label: "Phone", link: "tel:+919893951810" },
  ]

  return (
    <div className="min-h-[400px] sm:min-h-[600px] relative flex flex-col items-center justify-center py-16">
      <h2 className="text-2xl sm:text-3xl md:text-5xl text-blue-100 dark:text-blue-100 text-blue-800 mb-18 sm:mb-28">
        Contact Me
      </h2>
      <Contactlinks items={items} />
    </div>
  )
}

export default ContactMe

