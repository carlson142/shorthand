import React from "react";
import styled from "styled-components";

import bgDt from "../../img/bg-boost-desktop.svg";
import CustomButton from "../CustomButtons/CustomButton";

const Container = styled.section`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  background: url(${bgDt});
  background-repeat: no-repeat;
  background-size: cover;

  background-color: var(--color-primary-dark-violet);

  width: 100vw;
  height: 30rem;

  padding: 5rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: white;

  margin-bottom: 5rem;

  @media (max-width: 550px) {
    font-size: 2.5rem;
  }
`;

const SectionThree: React.FC = () => {
  return (
    <Container>
      <Title>Boost your links today</Title>

      <CustomButton text="Get started" primary></CustomButton>
    </Container>
  );
};

export default SectionThree;
