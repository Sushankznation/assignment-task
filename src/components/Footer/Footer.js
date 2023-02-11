import { SocialIcon } from 'react-social-icons';
import  {Container,Wrapper,Left,End,Desc,Center,Title,Title2,List,ListItem,Right} from './footerStyles'

const Footer = () => {
  return (
    <Container>
      <Wrapper>
      <Left>
        <Title>About Us</Title>
        <Desc>
          Rubixe is a global technology company specializing in disruptive
          technologies-Artificial Intelligence(AI),Machine Learning,Robotic Process
          Automation(RPA),BlockChain and Internet of Things(IoT). Rubixe mission
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
          Kudlu gate, Bengaluru, Karnataka
          560068
          <div>Phone:0804-717-8999</div>
          <div>Email:hi@rubixe.com</div>
          <h3>SOCIAL MEDIA</h3>
          <SocialIcon className="icon" style={{margin: "5px"}} url="https://www.facebook.com/Rubixe.Official/" />
          <SocialIcon className="icon" style={{margin: "5px"}} url="https://www.linkedin.com/company/rubixe/" />
        </Desc>
        
      </Right>
      </Wrapper>
      <End>© Copyright 2017 - 2023 | Rubixe is a brand of THINK AHEAD INNOVATIONS PVT. LTD. | All Rights Reserved</End>
    </Container>
  );
};

export default Footer;