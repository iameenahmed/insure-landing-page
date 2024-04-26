import desktopIntroImg from "../assets/image-intro-desktop.jpg";
import mobileIntroImg from "../assets/image-intro-mobile.jpg";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative before:absolute before:inset-0 before:z-10 before:h-full before:w-full lg:min-h-[58.125rem]"
    >
      <div className="relative z-0 pb-40 lg:px-20 lg:pb-0 lg:pt-[6.5rem] lg:before:absolute lg:before:inset-0 lg:before:h-[37.5rem] lg:before:w-full lg:before:bg-DarkViolet xl:px-[10.5rem]">
        <div className="relative flex flex-col lg:flex-row lg:items-start lg:gap-6">
          <div className="hero-content order-1 bg-DarkViolet bg-hero-left-mobile bg-left-top bg-no-repeat px-5 py-24 text-center text-white lg:basis-1/2 lg:bg-transparent lg:bg-none lg:p-0 lg:text-start">
            <h1 className="relative mb-6 font-DMSerif text-5xl lg:pt-14 lg:text-[4.375rem] lg:leading-none lg:before:absolute lg:before:-top-0 lg:before:h-[1px] lg:before:w-[9.375rem] lg:before:bg-white">
              <span className="lg:block">Humanizing</span> your insurance.
            </h1>
            <p className="px-2 leading-relaxed text-VeryLightGray lg:px-0">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.
            </p>
            <button className="mt-8 cursor-pointer border-2 px-6 py-2 uppercase tracking-wider hover:opacity-70 ">
              View plans
            </button>
          </div>
          <div className="order-0 w-full lg:order-2 lg:basis-1/2">
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
