
import styled from 'styled-components'
const Container = styled.div`
 height: 70px;
  text-decoration: none;
  user-select: none;
  background-color: #010101;
  color: white;
  background-position: bottom;
  position: fixed;
  z-index: 5;
  width: 100%;
  transition: background-color 0.3s;
  ${props => props.scrolled && `
    background-color: rgba(1,1,1,0.8);
    height: 75px;
    transition:height 0.5s;
  `}`
  
const Wrapper = styled.div`
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;
const Left = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 35%;
  height: 50px;
  padding: 8px 0;
`;
const Image = styled.img`
  width: 150px;
`;

const Right = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: flex-end;
`;
const MenuItems = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  
`
const List = styled.li`
  margin-left: 2vw;
  cursor: pointer;
  font-size: 0.9em;
  &:hover {
    opacity:0.5;
  }
`

export {Container,List,MenuItems,Right,Image,Logo,Left,Wrapper}