import styled from "styled-components";
const Container = styled.div`
  height: 65vh;
  box-sizing: border-box;
  padding: 30px 0;
  @media (max-width: 900px) {height:80vh;}
`;
const Wrapper = styled.div`
    height: 56vh;
    border: 2px solid gray;
    margin: 0px 150px 10px 150px;
    background-color: aliceblue;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    @media (max-width: 900px) {  flex-direction: column;height: 65vh;width:90%;margin:0px 15px;}
`
const Left = styled.div`
    margin: 0 50px 0 20px;
    flex: 1.5;
     @media (max-width: 900px) { margin:0px;}
`
const Center = styled.div`
    flex: 0.5;
`
const Right = styled.div`
    flex: 2;
`
const Divider = styled.div`
    width: 1px;
    height: 50vh;
    border-radius: 50%;
    background-color: grey;
     @media (max-width: 900px) {display:none; }
`
const FormContainer = styled.div`
    width: 100%;
    height: 43vh;
    gap:4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
     @media (max-width: 900px) {margin-bottom: 20px; }
    
`
const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;
const Desc = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
   @media (max-width: 900px) {  font-size: 13px;}
`;

const Input = styled.input`
  border: 2px solid;
  width: 80%;
  height: 45px;
  outline:none;
  border-radius: 6px;
  width: 75%;
  padding: 5px;
  font-size: 17px;
  text-align: left;
  &:focus {
    outline: none;
  }
   @media (max-width: 900px) { width:100%;font-size: 15px;}
`;
const Label = styled.label`
width: 100%;
font-size: 20px;
`;
const Button = styled.button`
    width: 76%;
    height: 50px;
    border: none;
    color: white;
    font-size:25px;
    border-radius: 6px;
    background-color: #1c2c60;
    margin-top: 20px;
    cursor: pointer;
   height:50px;
   @media (max-width: 900px) {  font-size:15px;}
`;
export {Button,Label,Input,Desc,Title,Container,FormContainer,Divider,Right,Center,Left,Wrapper}