import React from 'react';
import styled, { keyframes } from 'styled-components';
import SignUpForm from '../components/form/Form'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;
`;

const Text = styled.div`
  font-size: 3rem;
  text-align: center;
  max-width: 80%;
  position: relative;
  top:-10%;
  transform: translateY(50%);
  animation: ${fadeIn} 2s ease;
`;

const SubText = styled.div`
	color: #e3c07b;
  font-size: 2rem;
  text-align: center;
  position: relative;
  top: -5%;
  max-width: 80%;
  animation: ${fadeIn} 3s ease 2s;
  opacity: 0;
  animation-fill-mode: forwards; 
`;

const HomePage = () => {
  return (
    <ContentContainer>
      <Text>What Do We Do?</Text>
      <SubText>It's Simple, We Find You A Job, Guaranteed.</SubText>
			<SignUpForm />
    </ContentContainer>
  )
}

export default HomePage;
