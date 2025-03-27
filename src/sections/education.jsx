import Timeline from "../components/timeline"

function TimelineDemo() {
  const data = [
    {
      title: "2021-2025",
      content: (
        <div className="mb-6 sm:mb-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-normal mb-2 sm:mb-4">
            B.Tech Computer Science Engineering
          </p>
          <h2 className="text-neutral-800 dark:text-neutral-200 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
            NIMS University (nirf ranking:- 101-150)
          </h2>
          <h3 className="text-neutral-800 dark:text-neutral-200 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
            Jaipur, Rajasthan
          </h3>
          <h4 className="text-neutral-800 dark:text-neutral-200 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
            (C.G.P.A. 7.6)
          </h4>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div className="mb-6 sm:mb-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-normal mb-2 sm:mb-4">
            12<sup>th</sup> CBSE Board
          </p>
          <h2 className="text-neutral-800 dark:text-neutral-200 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
            Ratlam Public School
          </h2>
          <h3 className="text-neutral-800 dark:text-neutral-200 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
            Ratlam, Madhya Pradesh
          </h3>
          <h4 className="text-neutral-800 dark:text-neutral-200 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
            (Percentage 76%)
          </h4>
        </div>
      ),
    },
    {
      title: "2019",
      content: (
        <div className="mb-6 sm:mb-8">
          <p className="text-neutral-800 dark:text-neutral-200 text-xl sm:text-2xl md:text-3xl lg:text-5xl font-normal mb-2 sm:mb-4">
            10<sup>th</sup> CBSE Board
          </p>
          <h2 className="text-neutral-800 dark:text-neutral-200 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
            Ratlam Public School
          </h2>
          <h3 className="text-neutral-800 dark:text-neutral-200 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
            Ratlam, Madhya Pradesh
          </h3>
          <h4 className="text-neutral-800 dark:text-neutral-200 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-3">
            (Percentage 81%)
          </h4>
        </div>
      ),
    },
  ]

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  )
}

export default TimelineDemo

