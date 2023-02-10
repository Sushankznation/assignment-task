import { SocialIcon } from 'react-social-icons';

import styled from "styled-components";
const Container = styled.div`
    background-color: aliceblue;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 10px 140px 10px 140px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  margin: 15px 20px 20px 20px;
`;
const Title = styled.h2`
    margin-top: 30px;
  margin-bottom: 10px;
`;
const Title2 = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  &:active {
    color: #bc0000;
  }
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin-top: 15px;
`;

const Footer = () => {
  return (
    <Container>
      <Wrapper>
      <Left>
        <Title>About Us</Title>
        <Desc>
          Rubixe is a global technology company specializing in disruptive
          technologies-Artificial Intelligence(AI),Machine Learning,Robotic Process
          Automation(RPA),BlockChain and Internet of Things(IoT).Rubixe mission
          to enable business to leverage the full potential of disruptive
          tech to stay competitive in the market.
        </Desc>
      </Left>
      <Center>
      <Title2>MENUS</Title2>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>About</ListItem>
          <ListItem>Services</ListItem>
          <ListItem>Contact Us</ListItem>
          <ListItem>Products</ListItem>
          <ListItem>Career</ListItem>
        </List>
      </Center>
      <Right>
        <Title2>Address</Title2>
        <Desc>Novel Tech Park,1st Floor,Hosur Rd,
          Kudlu gate,Bengaluru,Karnataka
          560068
          <div>Phone:0804-717-8999</div>
          <div>Email:hi@rubixe.com</div>
          <h3>SOCIAL MEDIA</h3>
          <SocialIcon className="icon" url="https://www.facebook.com/Rubixe.Official/" />
          <SocialIcon className="icon" url="https://www.linkedin.com/company/rubixe/" />
        </Desc>
        
      </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;