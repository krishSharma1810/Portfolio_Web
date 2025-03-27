import { CardBody, CardContainer, CardItem } from "../components/3d-card"

// ✅ Multiple Cards Data
const cardData = [
  {
    image: "public/Project1.png",
    name: "SkillBidgeAI",
    description: "Hover over this card to unleash the power of CSS perspective",
    link: "https://twitter.com/mannupaaji",
  },
  {
    image: "public/Project2.png",
    name: "Analytix",
    description: "Experience smooth transitions and interactions with 3D perspective.",
    link: "https://twitter.com",
  },
  {
    image: "public/Project3.png",
    name: "Natours - Tourbook",
    description: "Cards pop-out beautifully using perspective and transform.",
    link: "https://google.com",
  },
  {
    image: "public/Project4.png",
    name: "Omnifood",
    description: "Cards pop-out beautifully using perspective and transform.",
    link: "https://google.com",
  },
  {
    image: "public/Project5.png",
    name: "WizardX",
    description: "Cards pop-out beautifully using perspective and transform.",
    link: "https://google.com",
  },
  {
    image: "public/Project6.png",
    name: "Employe Management System",
    description: "Cards pop-out beautifully using perspective and transform.",
    link: "https://google.com",
  },
]

const ThreeDCardDemo = () => {
  return (
    <>
      <div className="text-3xl sm:text-4xl md:text-5xl text-fuchsia-200 dark:text-fuchsia-200 text-purple-800 text-center pb-6 sm:pb-8 pt-8 sm:pt-10 font-semibold">
        My Projects
      </div>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4 sm:px-6 pb-10">
        {cardData.map((card, index) => (
          <CardContainer key={index} className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-800 bg-white dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[24rem] md:w-[28rem] lg:w-[30rem] h-auto rounded-xl p-4 sm:p-6 border">
              <CardItem translateZ="50" className="text-lg sm:text-xl font-bold text-neutral-600 dark:text-white">
                {card.name}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 dark:text-neutral-300 text-xs sm:text-sm max-w-sm mt-2"
              >
                {card.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={card.image || "/placeholder.svg"}
                  height="1000"
                  width="1000"
                  className="h-40 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-6 sm:mt-10 lg:mt-20 w-full">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  )
}

export default ThreeDCardDemo

