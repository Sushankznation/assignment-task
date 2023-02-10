import {Button,Label,Input,Desc,Title,Container,FormContainer,Divider,Right,Center,Left,Wrapper} from './formStyles'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup'



const Form = () => {
    const onSubmit=()=>{
        alert("We will back to You !")
    }
    const check = yup.object({
    name: yup.string().required(),
    email:yup.string().required(),
    phone:yup.string().required().min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
  
  }).required();
    
    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver:yupResolver(check)
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