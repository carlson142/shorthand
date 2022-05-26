import React from "react";
import styled from "styled-components";
import CustomButton from "../CustomButtons/CustomButton";

const Container = styled.div`
  width: 90vw;
  height: 40rem;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  color: white;

  background-color: var(--color-primary-dark-violet);

  position: absolute;
  top: 10rem;
  left: 50%;

  transform: translate(-50%);
  z-index: 1000;

  margin: 0 auto;

  border-radius: 1rem;

  padding: 0 3rem;
`;

const List = styled.ul`
  list-style: none;

  margin-bottom: 2rem;

  border-bottom: 1px solid #a09f9f;
  width: 100%;
`;

const Item = styled.li`
  text-decoration: none;
  font-size: 2rem;

  text-align: center;

  margin-bottom: 2rem;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;

  text-decoration: none;
`;

const Login = styled.span`
  font-size: 2rem;
  text-align: center;

  margin-bottom: 2rem;
`;

const MobileMenu: React.FC = () => {
  return (
    <Container>
      <List>
        <Item>Features</Item>
        <Item>Pricing</Item>
        <Item>Resourses</Item>
      </List>

      <Bottom>
        <Login>Login</Login>
        <CustomButton text="Sign Up" primary></CustomButton>
      </Bottom>
    </Container>
  );
};

export default MobileMenu;
