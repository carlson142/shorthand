import React from "react";
import styled from "styled-components";

import icon1 from "../../img/icon-brand-recognition.svg";
import icon2 from "../../img/icon-detailed-records.svg";
import icon3 from "../../img/icon-fully-customizable.svg";
import InputComponent from "../Input/InputComponent";

const Container = styled.section`
  padding: 5rem 10rem 20rem 10rem;

  background-color: #e9e6f0;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 5rem 5rem 20rem 5rem;
  }
`;

const Heading = styled.h2`
  font-size: 4rem;
  font-weight: 700;
  color: var(--color-neutral-very-dark-violet);

  @media (max-width: 768px) {
    font-size: 3rem;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;
  color: var(--color-neutral-grayish-violet);

  width: 50%;
  text-align: center;
  line-height: 1.6;

  margin-top: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const CardContainer = styled.div`
  display: flex;

  margin-top: 10rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

interface CardProps {
  down?: string;
}

const Card = styled.div<CardProps>`
  display: flex;
  flex-direction: column;

  padding: 2rem;
  padding-top: 0;
  background-color: white;
  border-radius: 1rem;

  min-width: 25rem;
  max-width: 30rem;

  :not(:last-child) {
    margin-right: 5rem;

    @media (max-width: 1000px) {
      margin-right: 0;
    }
  }

  transform: ${(props) => props.down && `translateY(${props.down})`};

  @media (max-width: 1000px) {
    min-width: 35rem;
    max-width: 80rem;
  }
`;

const CardImage = styled.div`
  background-color: var(--color-primary-dark-violet);
  border-radius: 50%;

  width: 7rem;
  height: 7rem;

  display: flex;
  justify-content: center;
  align-items: center;

  transform: translateY(-3rem);
`;

const Image = styled.img``;

const CardTitle = styled.h3`
  font-size: 2rem;
  color: var(--color-neutral-very-dark-violet);

  margin-bottom: 2rem;
`;

const CardText = styled.p`
  font-size: 1.4rem;
  line-height: 1.6;
  color: var(--color-neutral-grayish-violet);
`;

const SectionTwo: React.FC = () => {
  return (
    <Container>
      <InputComponent />

      <Heading>Advanced Statistics</Heading>
      <Text>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </Text>

      <CardContainer>
        {/* CARD 1 */}
        <Card>
          <CardImage>
            <Image src={icon1} alt="icon" />
          </CardImage>

          <CardTitle>Brand Recognition</CardTitle>

          <CardText>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </CardText>
        </Card>

        {/* CARD 2 */}
        <Card down="3rem">
          <CardImage>
            <Image src={icon2} alt="icon" />
          </CardImage>

          <CardTitle>Detailed Records</CardTitle>

          <CardText>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </CardText>
        </Card>

        {/* CARD 3 */}
        <Card down="6rem">
          <CardImage>
            <Image src={icon3} alt="icon" />
          </CardImage>

          <CardTitle>Fully Customizable</CardTitle>

          <CardText>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </CardText>
        </Card>
      </CardContainer>
    </Container>
  );
};

export default SectionTwo;
