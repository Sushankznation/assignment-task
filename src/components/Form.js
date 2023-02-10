import styled from "styled-components";
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup'

const Container = styled.div`
  height: 65vh;
  box-sizing: border-box;
  padding: 30px 0;
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
`
const Left = styled.div`
    margin: 0 50px 0 20px;
    flex: 1.5;
`
const Center = styled.div`
    flex: 0.5;
`
const Right = styled.div`
    flex: 2;
`
const Divider = styled.div`
    width: 5px;
    height: 50vh;
    border-radius: 50%;
    background-color: black;
`
const FormContainer = styled.div`
    width: 100%;
    height: 43vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    
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
`;

const Input = styled.input`
  border: 2px solid;
  width: 80%;
  height: 35px;
  border-radius: 6px;
  width: 75%;
  padding: 0px;
  font-size: 17px;
  text-align: center;
  &:focus {
    outline: none;
  }
`;
const Label = styled.label`
width: 100%;
font-size: 20px;
`;
const Button = styled.button`
    width: 76%;
    height: 40px;
    border: none;
    color: white;
    border-radius: 6px;
    background-color: #1b1ba9;
    margin-top: 20px;
    cursor: pointer;
`;


const Form = () => {
    const onSubmit=(data)=>{

        console.log(data);
    }
    const schema = yup.object({
        name: yup.string().required(),
    email:yup.string().required(),
    phone:yup.string().required().min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
  
  }).required();
    
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    })

    
  return (
    <>
    <Container>
        <Wrapper>
            <Left>
            <Title>GET IN TOUCH</Title>
            <Desc>Please complete the form and we will get back to you.</Desc>

            </Left>
            <Center>
                <Divider></Divider>
            </Center>
            <Right>
                <form onSubmit={handleSubmit(onSubmit)}>
                <FormContainer>
                    <Label>Name*</Label>
                        <Input type={'text'} {...register("name")} placeholder="Enter Your Name"></Input>
                        <span style={{color:"red"}}>{errors.name?.message}</span>
                        <Label>Email*</Label>
                        <Input type={'email'} {...register("email")} placeholder="Enter Your Email"></Input>
                        <span style={{color:"red"}}>{errors.email?.message}</span>
                        <Label>Phone Number*</Label>
                        <Input type={'number'} {...register("phone")} placeholder="Enter Your Number"></Input>
                        <span style={{color:"red"}}>{errors.phone?.message}</span>
                        <Button type="submit">Register Now</Button>
                    </FormContainer>
                </form>
            </Right>
            
      </Wrapper>
    </Container>
    </>
  )
}

export default Form