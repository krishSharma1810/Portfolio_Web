const gradientMapping = {
  blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
  purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
  red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
  indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
  orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
  green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
};

const Contactlinks = ({ items, className }) => {
  const getBackgroundStyle = (color) => ({
    background: gradientMapping[color] || color,
  });

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-18 md:gap-14 mx-auto overflow-visible ${className || ""}`}
    >
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          className="relative bg-transparent outline-none w-full sm:w-[12em] h-[4em] sm:h-[5em] [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group mx-auto"
        >
          {/* Back layer */}
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] block transition-transform duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[100%_100%] rotate-[15deg] group-hover:rotate-[25deg] group-hover:translate-x-[-0.5em] group-hover:translate-y-[-0.5em] group-hover:translate-z-[0.5em]"
            style={{
              ...getBackgroundStyle(item.color),
              boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
            }}
          ></span>

          {/* Front layer */}
          <span
            className="absolute top-0 left-0 w-full h-full rounded-[1.25em] bg-[hsla(0,0%,100%,0.15)] transition-transform duration-300 ease-[cubic-bezier(0.83,0,0.17,1)] origin-[80%_50%] flex items-center p-2 text-amber-50 backdrop-blur-[0.75em] [-webkit-backdrop-filter:blur(0.75em)] transform group-hover:translate-z-[2em]"
            style={{
              boxShadow: "0 0 0 0.1em hsla(0, 0%, 100%, 0.3) inset",
            }}
          >
            <span className="m-auto w-[1.5em] h-[1.5em] flex items-center justify-center text-white" aria-hidden="true">
              {item.icon}
            </span>
            <span className="text-sm sm:text-base truncate">{item.label}</span>
          </span>
        </a>
      ))}
    </div>
  );
};

export default Contactlinks;
