import './App.css'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import PageOne from './components/PageOne/PageOne'
import PageThree from './components/PageThree/PageThree'
import PageTwo from './components/PageTwo/PageTwo'
import NavBar from './components/NavBar/NavBar'
import Main from './components/Main/Main'
import Loader from './components/Loader/Loader'
import { useState,useEffect } from 'react'
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
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

export default App;
