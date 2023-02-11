import styled from "styled-components";
const Container = styled.div`
    background-color: aliceblue;
`;
const Wrapper = styled.div`
  display: flex;
  margin: 10px 140px 10px 140px;
  @media (max-width: 900px) { margin:0px;flex-direction:column;}`;
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
  color: black;
  &:hover {
    color: #FFA500;
  }
`;


const Right = styled.div`
  flex: 1;
  padding: 20px;
  margin-top: 15px;
`;
const End = styled.div`
  flex: 1;
  padding: 10px;
  background-color:black;
  height:5vh;
  color:grey;
  font-size:15px;
  display:flex;
  align-items:center;
  font-weight: bold;
  @media (max-width: 900px) { font-size:10px; }
`;
export {Container,Wrapper,Left,Desc,Center,Title,Title2,List,ListItem,Right,End}