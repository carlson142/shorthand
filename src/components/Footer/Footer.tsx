import React from "react";
import styled from "styled-components";

import logo from "../../img/logo-footer.svg";
import "./social.scss";

import {
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoPinterest,
  IoLogoInstagram,
} from "react-icons/io5";

const Container = styled.footer`
  padding: 5rem 15rem;
  background-color: var(--color-neutral-very-dark-violet);

  display: flex;
  justify-content: space-between;

  @media (max-width: 1200px) {
    padding: 5rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  @media (max-width: 1000px) {
    margin-bottom: 3rem;
  }
`;

const Logo = styled.img``;

const MenuContainer = styled.div`
  display: flex;

  @media (max-width: 1000px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

const MenuBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 550px) {
    text-align: center;
  }

  :not(:last-child) {
    margin-right: 7rem;

    @media (max-width: 550px) {
      margin-right: 0;
      margin-bottom: 3rem;
    }
  }
`;

const MenuTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 700;
  color: white;

  margin-bottom: 3rem;
`;

const MenuItem = styled.li`
  font-size: 1.5rem;
  color: var(--color-neutral-gray);

  list-style: none;

  :not(:last-child) {
    margin-bottom: 1.5rem;
  }

  cursor: pointer;
  transition: var(--tr);

  :hover {
    color: var(--color-primary-cyan);
  }
`;

const SocialContainer = styled.div`
  display: flex;
`;

const Social = styled.div`
  :not(:last-child) {
    margin-right: 2rem;
  }

  cursor: pointer;
`;

const Footer: React.FC = () => {
  return (
    <Container>
      {/* LOGO */}
      <LogoContainer>
        <Logo src={logo} alt="logo" />
      </LogoContainer>

      {/* MENU */}
      <MenuContainer>
        <MenuBlock>
          <MenuTitle>Features</MenuTitle>

          <MenuItem>Link Shortening</MenuItem>
          <MenuItem>Branded Links </MenuItem>
          <MenuItem>Analytics</MenuItem>
        </MenuBlock>
        <MenuBlock>
          <MenuTitle>Resources</MenuTitle>

          <MenuItem>Blog</MenuItem>
          <MenuItem>Developers </MenuItem>
          <MenuItem>Support</MenuItem>
        </MenuBlock>

        <MenuBlock>
          <MenuTitle>Company</MenuTitle>

          <MenuItem>About</MenuItem>
          <MenuItem>Our Team </MenuItem>
          <MenuItem>Careers</MenuItem>
          <MenuItem>Contact</MenuItem>
        </MenuBlock>
      </MenuContainer>

      {/* SOCIALS */}
      <SocialContainer>
        <Social>
          <IoLogoFacebook className="social" />
        </Social>

        <Social>
          <IoLogoTwitter className="social" />
        </Social>

        <Social>
          <IoLogoPinterest className="social" />
        </Social>

        <Social>
          <IoLogoInstagram className="social" />
        </Social>
      </SocialContainer>
    </Container>
  );
};

export default Footer;
