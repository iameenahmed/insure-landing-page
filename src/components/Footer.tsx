import logo from "../assets/logo.svg";
import { socialLinks, links } from "../data/footer";

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul>
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
      <div>
        {links.map(({ title, links }, index) => {
          return (
            <div key={index}>
              <h5>{title}</h5>
              <ul>
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
