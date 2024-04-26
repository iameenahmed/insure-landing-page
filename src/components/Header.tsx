import logo from "../assets/logo.svg";
import hamburger from "../assets/icon-hamburger.svg";
import close from "../assets/icon-close.svg";
import { useState } from "react";

const Header = () => {
  const navItems = ["How we work", "Blog", "Account"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-6 lg:px-20 lg:py-5 xl:px-[10.5rem]">
      <div className="inline-flex w-full items-center justify-between md:w-auto">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div className="md:hidden">
          {isOpen ? (
            <button aria-label="open menu" onClick={() => setIsOpen(false)}>
              <img src={close} alt="close icon" />
            </button>
          ) : (
            <button aria-label="close menu" onClick={() => setIsOpen(true)}>
              <img src={hamburger} alt="hamburger icon" />
            </button>
          )}
        </div>
      </div>

      <div>
        <nav>
          {/* Mobile Navigation */}
          {isOpen && (
            <ul className="fixed inset-0 top-20 z-20 space-y-10 bg-DarkViolet bg-nav bg-bottom bg-no-repeat pt-20 text-center text-3xl uppercase tracking-wide text-white md:hidden">
              {navItems.map((item, index) => {
                return (
                  <li key={index} className="cursor-pointer hover:opacity-70">
                    {item}
                  </li>
                );
              })}
              <li>
                <button className="cursor-pointer border-2 border-white px-16 py-3 uppercase hover:opacity-70 md:border-DarkViolet">
                  View plans
                </button>
              </li>
            </ul>
          )}
          {/* Desktop navigation */}
          <div className="hidden md:inline-block">
            <ul className="flex items-center gap-7 font-bold uppercase tracking-wider text-DarkGrayishViolet">
              {navItems.map((item, index) => {
                return (
                  <li key={index} className="cursor-pointer hover:opacity-70">
                    {item}
                  </li>
                );
              })}
              <li>
                <button className="cursor-pointer border-2 border-white px-5 py-1.5 font-bold uppercase text-DarkViolet hover:opacity-70 md:border-DarkViolet">
                  View plans
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
