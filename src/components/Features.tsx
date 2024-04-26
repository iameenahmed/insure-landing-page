import features from "../data/features";

const Features = () => {
  return (
    <>
      <div className="mb-16 space-y-8 px-6 text-center md:text-start lg:px-[10.5rem]">
        <h2 className="relative pt-16 font-DMSerif text-5xl before:absolute before:top-0 before:h-[1px] before:w-[9.375rem] before:bg-DarkGrayishViolet lg:-mt-7 lg:text-6xl">
          We’re different
        </h2>
        <div className="gap-8 md:flex">
          {features.map(({ id, icon, title, detail }) => {
            return (
              <div
                key={id}
                className="mt-14 flex flex-col items-center gap-6 md:items-start"
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
      <div className="mx-4 my-12 flex flex-col items-center bg-DarkViolet bg-how-we-work-mobile bg-right-top bg-no-repeat py-[4.5rem] text-white md:mx-[10.5rem] md:my-40 md:flex-row md:bg-how-we-work md:bg-contain md:bg-right md:px-[5.125rem] lg:justify-between">
        <h4 className="text-center font-DMSerif text-4xl md:text-start md:text-[3.5rem] md:leading-none">
          <span className="md:block">Find out more</span> about how we work
        </h4>
        <button className="mt-10 inline-block cursor-pointer border-2 px-5 py-1.5 uppercase tracking-wide hover:opacity-70">
          How we work
        </button>
      </div>
    </>
  );
};
export default Features;
