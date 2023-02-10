import {Container,List,MenuItems,Right,Image,Logo,Left,Wrapper}  from './headerStyles'
import React, { useState, useEffect } from 'react'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrolled(window.scrollY > 0)
    })
  }, [])
  return (
    <>
        <Container scrolled={scrolled}>
      <Wrapper>
        <Left>
          <Logo>
            <Image src='https://rubixe.com/assets/img/logo/white-rubixe-logo.png' />
          </Logo>
        </Left>
        <Right>
          <MenuItems>
            <List>HOME</List>
            <List>SERVICES</List>
            <List>PRODUCTS</List>
            <List>AI INTERNSHIP</List>
            <List>CAREER</List>
            <List>BLOG</List>
            <List>ABOUT</List>
            <List>CONTACT US</List>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
    </>
  )
}

export default NavBar

