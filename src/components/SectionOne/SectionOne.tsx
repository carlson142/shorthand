import React from "react";
import styled from "styled-components";

import one from "../../img/illustration-working.svg";
import CustomButton from "../CustomButtons/CustomButton";

const Container = styled.section`
  height: 80vh;
  padding: 5rem 10rem;

  display: flex;
  position: relative;

  @media (max-width: 1200px) {
    flex-direction: column-reverse;
    height: 90rem;
  }

  @media (max-width: 768px) {
    height: 85rem;
    padding: 5rem 3rem;
  }

  @media (max-width: 550px) {
    height: 75rem;
  }

  @media (max-width: 450px) {
    height: 65rem;
  }
`;

const Left = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 100%;
    height: 30rem;
    height: 50%;

    align-items: center;
  }
`;

const Heading = styled.h1`
  font-size: 6rem;
  font-weight: 700;
  color: var(--color-neutral-very-dark-violet);

  @media (max-width: 1000px) {
    font-size: 4rem;
  }

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 550px) {
    font-size: 3rem;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;
  color: var(--color-neutral-grayish-violet);
  line-height: 1.6;

  margin-top: 2rem;

  @media (max-width: 1200px) {
    text-align: center;
  }
`;

const BtnCont = styled.div`
  margin-top: 2rem;
`;

const Right = styled.div`
  width: 50%;

  overflow: hidden;

  @media (max-width: 1200px) {
    width: 100%;
    height: 60rem;
    height: 50%;
  }
`;

const RightImg = styled.img`
  position: absolute;
  right: -10rem;

  object-fit: cover;

  @media (max-width: 1200px) {
    right: 50%;
    transform: translate(50%);
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const SectionOne: React.FC = () => {
  return (
    <Container>
      <Left>
        <Heading>More than just shorter links</Heading>
        <Text>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </Text>
        <BtnCont>
          <CustomButton primary text="Get Started" />
        </BtnCont>
      </Left>

      <Right>
        <RightImg src={one} alt="working" />
      </Right>
    </Container>
  );
};

export default SectionOne;
