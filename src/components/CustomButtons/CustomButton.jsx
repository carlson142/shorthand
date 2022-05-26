import React from "react";
import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  padding: 1rem 2rem;
  border: none;
  border-radius: 1rem;
  transition: var(--tr);

  font-size: 1.6rem;
  font-weight: 500;
  font-family: inherit;

  ${(props) =>
    props.primary &&
    `
    background-color: var(--color-primary-cyan);
    color: white;

    :hover {
    opacity: 0.7;
  }
  
  `}

  ${(props) =>
    props.secondary &&
    `
    background-color: transparent;
    color: var(--color-neutral-grayish-violet);
   
    :hover {
    color: black;
  }
  `}
`;

const CustomButton = ({ text, ...otherProps }) => {
  return <Button {...otherProps}>{text}</Button>;
};

export default CustomButton;
