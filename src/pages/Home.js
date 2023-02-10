import React from 'react'
import Footer from '../components/Footer'
import Form from '../components/Form'
import PageOne from '../components/PageOne/PageOne'
import PageThree from '../components/PageThree/PageThree'
import PageTwo from '../components/PageTwo/PageTwo'
import NavBar from '../components/NavBar/NavBar'
import Main from '../components/Main/Main'

const Home = () => {
  return (
    <>
        <NavBar/>
        <Main/>
        <PageOne/>
        <PageTwo/>
        <PageThree/>
        <Form/>
        <Footer/>
    </>
  )
}

export default Home