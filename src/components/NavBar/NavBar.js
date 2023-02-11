import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)
  const MENU = [
    {
      title: "HOME",
      link: "#"
    },
    {
      title: "SERVICES",
      link: "#"
    },
    {
      title: "PRODUCTS",
      link: "#"
    },
    {
      title: "AI INTERNSHIPS",
      link: "#"
    },
    {
      title: "CAREER",
      link: "#"
    },
    {
      title: "BLOG",
      link: "#"
    },
    {
      title: "ABOUT US",
      link: "#"
    },
    {
      title: "CONTACT",
      link: "#"
    }
  ];

  const handleOnClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 0)
    })
  }, [])
  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <div className="logo"><img className="logo_img" src="https://rubixe.com/assets/img/logo/white-rubixe-logo.png" alt="logo" /></div>
      <ul className="desktop-menu">
        {MENU.map((menuItem) => {
          return (
            <li>
              <a href={menuItem.link}>{menuItem.title}</a>
            </li>
          );
        })}
      </ul>
      {isMobileMenuOpen ? (
        <FontAwesomeIcon
          className="mobile-menu-button"
          icon={faXmark}
          onClick={handleOnClick}
        />
      ) : (
        <FontAwesomeIcon
          className="mobile-menu-button"
          icon={faBars}
          onClick={handleOnClick}
        />
      )}
      {isMobileMenuOpen ? (
        <ul className="mobile-menu">
          {MENU.map((menuItem) => {
            return (
              <li>
                <a href={menuItem.link}>{menuItem.title}</a>
              </li>
            );
          })}
        </ul>
      ) : (
        ""
      )}
    </nav>
  );
};

export default Navbar;
