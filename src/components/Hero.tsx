import desktopIntroImg from "../assets/image-intro-desktop.jpg";
import mobileIntroImg from "../assets/image-intro-mobile.jpg";

const Hero = () => {
  return (
    <div id="hero" className="lg:relative lg:z-10 lg:min-h-[58.125rem]">
      <div className="relative z-0 lg:px-[10.5rem] lg:pt-[6.5rem] lg:before:absolute lg:before:inset-0 lg:before:h-[37.5rem] lg:before:w-full lg:before:bg-DarkViolet">
        <div className="relative flex flex-col md:flex-row md:gap-6 lg:items-start">
          <div className="hero-content order-1 bg-DarkViolet px-5 py-24 text-center text-white md:basis-1/2 md:p-0 md:text-start lg:bg-transparent">
            <h1 className="relative mb-4 mt-16 font-DMSerif text-5xl lg:text-6xl lg:before:absolute lg:before:-top-1/2 lg:before:h-[1px] lg:before:w-[9.375rem] lg:before:bg-white">
              <span className="lg:block">Humanizing</span> your insurance.
            </h1>
            <p className="px-2 text-VeryLightGray md:px-0">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
            <button className="mt-10 cursor-pointer border-2 px-6 py-2 uppercase tracking-wider hover:opacity-70 ">
              View plans
            </button>
          </div>
          <div className="order-0 w-full md:order-2 md:basis-1/2">
            <picture className="w-full">
              <source media="(min-width: 780px)" srcSet={desktopIntroImg} />
              <img
                src={mobileIntroImg}
                alt="intro illustration image in which parents with children holding their hands and walking in a row"
                className="w-full"
              />
            </picture>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
