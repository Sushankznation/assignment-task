import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: antiquewhite;
  height: 50vh;
  position: relative;
  overflow: hidden;
  @media (max-width: 900px) { height:60vh; display:flex;flex-direction:column;};
`;

const InnerContainer = styled.div`
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
  margin: 0 150px 0 150px;
  @media (max-width: 900px) { flex-direction:column;z-index:5;margin:0px;overflow:visible;};
`;

const Wrapper = styled.div`
  height: 40vh;
  flex: 1.5;
  box-sizing: border-box;
  padding: 10px 20px 10px 20px;
  display: flex;
  flex-direction: column;
  
`;

const Title = styled.h3`
  
`;

const Description = styled.p`
  overflow: visible;
`;

const ImageContainer = styled.div`
  height: 29vh;
  margin-top: 20px;
  flex: 1;
  @media (max-width: 900px) { height:50vh;width:100vw;position:absolute; };
`;

const Image = styled.img`
  width: 400px;
  background-size: cover;
  background-position: center;
  @media (max-width: 900px) { display:contents;};

`;

export {
  Image,
  ImageContainer,
  Title,
  Description,
  Wrapper,
  Container,
  InnerContainer,
};
