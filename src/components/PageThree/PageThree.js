import {Container,InnerContainer,Title,Wrapper,Items,item1,P,item2,item3,item4,item5,box1,box2,Boxes,P1a,P2a,box3,box2a,box2b} from './pageThreeStyling'
const Three = () => {
  return (
    <>
        <Container>
        <InnerContainer>
        <Title>TECH FOR TEENS - A RUBIXE @INITIATIVE</Title>
        <Wrapper>
          <Items style={item1}>
            <P style={P1a}></P>
            <Boxes style={box1}>01</Boxes>
            <Boxes style={box2}></Boxes>
            <Boxes style={box3}>Introducing Ai to children in an age appropriate manner.</Boxes>
          </Items>
          <Items style={item2}>
            <Boxes style={box2a}>02</Boxes>
            <Boxes style={box3}>Gain awareness on AI and build an interactive story around it.</Boxes>
            <Boxes style={box2b}></Boxes>
            <P style={P2a}></P>
          </Items>
          <Items style={item3}>
          <P style={P1a}></P>
            <Boxes style={box1}>03</Boxes>
            <Boxes style={box2}></Boxes>
            <Boxes style={box3}>Acquire programming skills in a user-friendly format.</Boxes>
          </Items>
          <Items style={item4}>
          <Boxes style={box2a}>04</Boxes>
            <Boxes style={box3}>Exposure to mini projects on diverse topics.</Boxes>
            <Boxes style={box2b}></Boxes>
            <P style={P2a}></P>
          </Items>
          <Items style={item5}>
          <P style={P1a}></P>
            <Boxes style={box1}>05</Boxes>
            <Boxes style={box2}></Boxes>
            <Boxes style={box3}>Train the teachers programme.</Boxes>
          </Items>
        </Wrapper>
        </InnerContainer>
      </Container>
    </>
  )
}

export default Three