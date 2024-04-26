import logo from "../assets/logo.svg";
import { socialLinks, links } from "../data/footer";

const Footer = () => {
  return (
    <div className="bg-VeryLightGray bg-footer-mobile bg-top bg-no-repeat px-6 py-20 md:bg-footer md:bg-left-top md:px-[10.5rem] md:py-16">
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
      <div className="text-center font-bold uppercase tracking-widest md:grid md:grid-cols-4 md:text-start">
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
    </div>
  );
};
export default Footer;
