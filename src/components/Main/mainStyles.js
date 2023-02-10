import styled from "styled-components";

const Container = styled.div` width: 100%;
 background-color: black;
 height: 100vh;
 display: flex;
 position: relative;
 overflow: hidden;;`

const Wrapper = styled.div` height: 100vh; 
display: flex; 
background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'); 
background-size: cover; 
background-position: center;;`

const MainC = styled.div` width: 100vw;
 height: 100vh;
 display: flex;
 align-items: flex-start;
 flex-direction: column;;`

const ImgContainer = styled.div` height: 50%;
 margin-top: 150px;
 margin-left: 0;
 @media (max-width: 900px) { height: 35%;
 margin-top: 75px;
 };`

const Image = styled.img`height: 55%;
 margin-left: 250px;
 margin-top: 98px;
 @media (max-width: 900px) { height: 45%;
 margin-left: 42px;
  margin-top: 96px; };`

const InfoContainer = styled.div` 
margin: -70px 109px 0px 278px; 
@media (max-width: 900px) 
{ margin:-16px 0px 0px 44px; };`
const Title = styled.h2`font-size: 27px; 
margin-bottom: -15px; 
color: white; 
box-sizing: border-box; 
background-color: transparent;;`

export { Title, InfoContainer, Image, ImgContainer, MainC, Wrapper, Container };