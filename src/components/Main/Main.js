import {Title,InfoContainer,Image,ImgContainer,MainC,Wrapper,Container} from './mainStyles'
const Main = () => {

  return (
    <Container>
      <Wrapper>
          <MainC>
            <ImgContainer>
              <Image src="https://i.ibb.co/rbVYz1z/tech-CoE.png" />
            </ImgContainer>
            <InfoContainer>
              <Title>CARVING FUTURE</Title>
              <Title>TECHNOLOGY PROFESSIONALS</Title>
              <Title>OUT OF YOUNG MINDS</Title>
            </InfoContainer>
          </MainC>
      </Wrapper>
    </Container>
  );
};

export default Main;