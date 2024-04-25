import logo from "../assets/logo.svg";

const Header = () => {
  const navItems = ["How we work", "Blog", "Account"];
  return (
    <header>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <nav>
          <ul>
            {navItems.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
            <li>
              <button>View plans</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
