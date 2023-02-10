import {Image,ImageContainer,Title,Description,Wrapper,Container,InnerContainer} from './pageOneStyles.js'
const One = () => {
  return (
    <>
      <Container>
        <InnerContainer>
        <Wrapper>
          <Title>
            WHO WE ARE
          </Title>
          <Description>
          Rubixe is a global technology company specializing in disruptive technologies-
          Artificial Intelligence(AI),Machine Learning,Robotic Process Automation(RPA),
          BlockChain,and Internet of Things(IoT).
          </Description>
          <Description>
            Rubixe mission is to enable business to leverage the full potential of disruptive
            technologies and stay competitive int the market,turning complex challenges into 
            sulotions,providing a strategic competitive advantage that are more effective and 
            predictable.
          </Description>
        </Wrapper>
        <ImageContainer>
            <Image src="https://images.unsplash.com/photo-1670272506173-0b0be082a52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
        </ImageContainer>
        </InnerContainer>
      </Container>
    </>
  );
}

export default One