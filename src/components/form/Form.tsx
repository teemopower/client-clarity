import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: -1%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 0px;
  animation: ${fadeIn} 2s ease 4s forwards;
  opacity: 0;
  animation-fill-mode: forwards; 
  width: 400px;
  height: 460px;
`;

const Input = styled.input`
  padding: .7rem;
  border: none;
  border-bottom: 1px solid #000;
  margin-top: .5rem;
  margin-bottom: 1rem;
  width: 80%;
  color: black;
  font-family: arial;
  font-size: 1.2rem;

  ::placeholder {
    color: black;
    font-size: 1.2rem;
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid  #e3c07b;
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  padding: 0.5rem;
  border: none;
  border-radius: 2px;
  background-color: black;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 1.2rem;
  margin-top: 2rem;
  width:85%;

  &:hover {
    background-color: #787878;
  }
`;

const FormTitle = styled.h2`
  margin: .5rem 0 1.3rem 0;
  text-align: center;
  font-size: 1.8rem;
`;

const postData = async (url = '', data: FormValues) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data ? JSON.stringify(data) : null
  };

  const response = await fetch(url, options);
  const result = await response.json();
  return result;
};

const SignUpForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    postData('https://hidden-journey-46544.herokuapp.com/users', formValues)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormTitle>Sign Up</FormTitle>
        <Input type="text" name="firstName" value={formValues.firstName} onChange={handleChange} placeholder="First Name" />
        <Input type="text" name="lastName" value={formValues.lastName} onChange={handleChange} placeholder="Last Name" />
        <Input type="email" name="email" value={formValues.email} onChange={handleChange} placeholder="Email Address" />
        <Input type="tel" name="phone" value={formValues.phone} onChange={handleChange} placeholder="Phone Number" />
        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};

export default SignUpForm;
