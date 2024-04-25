import desktopIntroImg from "../assets/image-intro-desktop.jpg";
import mobileIntroImg from "../assets/image-intro-mobile.jpg";

const Hero = () => {
  return (
    <div>
      <div>
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button>View plans</button>
      </div>
      <div>
        <picture>
          <source media="(min-width: 780px)" srcSet={desktopIntroImg} />
          <img
            src={mobileIntroImg}
            alt="intro illustration image in which parents with children holding their hands and walking in a row"
          />
        </picture>
      </div>
    </div>
  );
};
export default Hero;
