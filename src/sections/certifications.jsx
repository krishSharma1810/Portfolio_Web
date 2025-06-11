"use client"
import LinkPreview from "../components/linkPreview"

function LinkPreviewDemo() {
  return (
    <div className="flex pt-10 sm:pt-18 px-4 sm:pl-12 h-auto min-h-[70vh] flex-col">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50 mb-8 sm:mb-14">
        Certifications
      </h1>
      <ul className="list-disc ml-5 sm:ml-18">
        <li className="text-neutral-700 dark:text-neutral-400 text-base sm:text-lg md:text-2xl lg:text-4xl mb-6 sm:mb-10">
          Finalist Level SuperMind{" "}
          <LinkPreview
            url="https://drive.google.com/file/d/17oRsJhJlhKYXCK8iPHWGSfZwJ3fVNwnq/view?usp=sharing"
            className="font-bold"
          >
            GenAI Hackathon
          </LinkPreview>{" "}
          -{" "}
          <i>
            <u>(January 2025)</u>
          </i>
        </li>
        <li className="text-neutral-700 dark:text-neutral-400 text-base sm:text-lg md:text-2xl lg:text-4xl mb-6 sm:mb-10">
          Cleared{" "}
          <LinkPreview
            url="https://drive.google.com/file/d/1x_OF02lpHYXhy5lnWemsiak4cFsY5RaD/view?usp=sharing"
            className="font-bold"
          >
            Smart India Hackathon 2024
          </LinkPreview>{" "}
          Phase 1 -
          <i>
            <u> (September 2024)</u>
          </i>
        </li>
        <li className="text-neutral-700 dark:text-neutral-400 text-base sm:text-lg md:text-2xl lg:text-4xl mb-6 sm:mb-10">
          Complete{" "}
          <LinkPreview
            url="https://drive.google.com/file/d/17oRsJhJlhKYXCK8iPHWGSfZwJ3fVNwnq/view?usp=sharing"
            className="font-bold"
          >
            Generative AI
          </LinkPreview>{" "}
          Course with LangChain and HuggingFace -{" "}
          <i>
            <u>(December-2024) Udemy</u>
          </i>
        </li>
        <li className="text-neutral-700 dark:text-neutral-400 text-base sm:text-lg md:text-2xl lg:text-4xl mb-6 sm:mb-10">
          <LinkPreview
            url="https://drive.google.com/file/d/1FdrFuvfeHts-eaJSnHde12aGn2l6soZ2/view?usp=sharing"
            className="font-bold"
          >
            Node.js, Express, MongoDB
          </LinkPreview>{" "}
          : The Complete Bootcamp -{" "}
          <i>
            <u>(August-September 2024) Udemy</u>
          </i>
        </li>
        <li className="text-neutral-700 dark:text-neutral-400 text-base sm:text-lg md:text-2xl lg:text-4xl mb-6 sm:mb-10">
          <LinkPreview
            url="https://drive.google.com/file/d/1D_H8ofyttQF9zophULEDXs6ViHPDCJWb/view?usp=sharing"
            className="font-bold"
          >
            Responsive Web Develpoment
          </LinkPreview>{" "}
          : With HTML, CSS, Javascript -{" "}
          <i>
            <u>(October-November 2022) Udemy</u>
          </i>
        </li>
      </ul>
    </div>
  )
}

export default LinkPreviewDemo

