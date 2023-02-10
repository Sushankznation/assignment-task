import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  background-color: #9d094b;
  height: 25vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  @media (max-width: 900px) {
    height: 40vh;
  }
`;

const Wrapper = styled.div`
  height: 25vh;
  box-sizing: border-box;
  padding: 5px 20px 5px 20px;
  margin: 0 150px 0 150px;
  color: white;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    margin: 0;
    padding: 5px;
    height: auto;
    text-align: left;
  }
`;

const Title = styled.h3`
  @media (max-width: 900px) {
    text-align: left;
  }
`;

const Description = styled.p`
  margin-top: 0;
  overflow: hidden;
  text-align: left;
  @media (max-width: 900px) {
    margin-top: 10px;
  }
`;

export { Container, Wrapper, Title, Description };
