import features from "../data/features";

const Features = () => {
  return (
    <>
      <div className="mb-16 space-y-8 px-6 text-center min-[500px]:px-20 lg:text-start xl:px-[10.5rem]">
        <h2 className="relative -mt-7 pt-10 font-DMSerif text-5xl before:absolute before:top-0 before:h-[1px] before:w-[9.375rem] before:translate-x-1/2 before:transform before:bg-DarkGrayishViolet lg:pt-16 lg:text-6xl lg:before:transform-none">
          We’re different
        </h2>
        <div className="lg:flex lg:gap-8">
          {features.map(({ id, icon, title, detail }) => {
            return (
              <div
                key={id}
                className="mt-14 flex flex-col items-center gap-6 lg:items-start"
              >
                <div>
                  <img src={icon} alt="icon" />
                </div>
                <h3 className="font-DMSerif text-3xl">{title}</h3>
                <p className="text-DarkGrayishViolet">{detail}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mx-4 my-12 flex flex-col items-center bg-DarkViolet bg-how-we-work-mobile bg-right-top bg-no-repeat py-[4.5rem] text-white md:my-40 md:flex-row md:justify-between md:bg-how-we-work md:bg-contain md:bg-right md:px-10 lg:px-[5.125rem] xl:mx-[10.5rem]">
        <h4 className="text-center font-DMSerif text-4xl md:text-start md:leading-none lg:text-[3.5rem]">
          <span className="md:block">Find out more</span> about how we work
        </h4>
        <button className="mt-10 inline-block cursor-pointer border-2 px-5 py-1.5 uppercase tracking-wide hover:opacity-70 md:mt-0">
          How we work
        </button>
      </div>
    </>
  );
};
export default Features;
