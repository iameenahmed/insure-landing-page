import logo from "../assets/logo.svg";
import { socialLinks, links } from "../data/footer";

const Footer = () => {
  return (
    <footer className="bg-VeryLightGray bg-footer-mobile bg-top bg-no-repeat px-6 py-20 text-sm md:bg-footer md:bg-left-top md:p-16 xl:px-[10.5rem]">
      <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className="flex gap-4">
            {socialLinks.map(({ name, icon }, index) => {
              return (
                <li key={index}>
                  <a href={`www.${name}.com`} aria-label={name}>
                    <img src={icon} alt={`${name} icon`} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <hr className="my-12 bg-VeryDarkViolet md:my-8" />
      <div className="text-center font-bold uppercase tracking-widest md:grid md:grid-cols-2 md:gap-y-8 md:text-start lg:grid-cols-4">
        {links.map(({ title, links }, index) => {
          return (
            <div key={index}>
              <h5 className="mb-7 mt-3 text-DarkGrayishViolet">{title}</h5>
              <ul className="space-y-2.5">
                {links.map((item, index) => {
                  return <li key={index}>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </footer>
  );
};
export default Footer;
