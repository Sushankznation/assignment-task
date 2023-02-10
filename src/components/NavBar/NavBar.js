// import {Container,List,MenuItems,Right,Image,Logo,Left,Wrapper}  from './headerStyles'
// import React, { useState, useEffect } from 'react'

// const NavBar = () => {
//   const [scrolled, setScrolled] = useState(false)

  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
  //     setScrolled(window.scrollY > 0)
  //   })
  // }, [])
//   return (
//     <>
//         <Container scrolled={scrolled}>
//       <Wrapper>
//         <Left>
//           <Logo>
//             <Image src='https://rubixe.com/assets/img/logo/white-rubixe-logo.png' />
//           </Logo>
//         </Left>
//         <Right>
//           <MenuItems>
//             <List>HOME</List>
//             <List>SERVICES</List>
//             <List>PRODUCTS</List>
//             <List>AI INTERNSHIP</List>
//             <List>CAREER</List>
//             <List>BLOG</List>
//             <List>ABOUT</List>
//             <List>CONTACT US</List>
//           </MenuItems>
//         </Right>
//       </Wrapper>
//     </Container>
//     </>
//   )
// }

// export default NavBar

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
