import React, { useState } from "react";
import styled from "styled-components";

import logo from "../../img/logo.svg";
import CustomButton from "../CustomButtons/CustomButton";

import { IoMenu } from "react-icons/io5";
import MobileMenu from "../MobileMenu/MobileMenu";

const Container = styled.header`
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 5rem 10rem;

  position: relative;

  @media (max-width: 1000px) {
    padding: 5rem;
  }
`;

const Logo = styled.div``;

const LogoImg = styled.img``;

const Menu = styled.ul`
  display: flex;
  list-style: none;

  margin-right: auto;
  margin-left: 5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  cursor: pointer;
  color: var(--color-neutral-grayish-violet);
  font-size: 1.6rem;
  transition: var(--tr);

  text-decoration: none;

  :not(:last-child) {
    margin-right: 2rem;
  }

  :hover {
    color: var(--color-neutral-very-dark-violet);
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Header: React.FC = () => {
  const [menu, setMenu] = useState<boolean>(false);

  const showMenu = () => {
    setMenu(!menu);
  };

  console.log(menu);

  return (
    <Container>
      <Logo>
        <LogoImg src={logo} alt="logo" />
      </Logo>

      <Menu>
        <MenuItem>Features</MenuItem>
        <MenuItem>Pricing</MenuItem>
        <MenuItem>Resources</MenuItem>
      </Menu>

      <Buttons>
        <CustomButton secondary text="Login" />
        <CustomButton primary text="Sign up" />
      </Buttons>

      <MenuIcon>
        <IoMenu size={25} onClick={showMenu} />
      </MenuIcon>

      {menu && <MobileMenu />}
    </Container>
  );
};

export default Header;
