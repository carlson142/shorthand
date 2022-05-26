import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";

import inputBG from "../../img/bg-shorten-desktop.svg";
import validator from "validator";
import { useAppDispatch, useAppSelector } from "../../redux/hooks/hooks";
import { setInput } from "../../redux/slice/inputSlice";
import { fetchUrl } from "../../redux/slice/asyncSlice";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  width: 80vw;
  height: 17vh;
  padding: 0 5rem;

  background: url(${inputBG});
  background-repeat: no-repeat;
  background-size: cover;

  background-color: var(--color-primary-dark-violet);

  border-radius: 1rem;

  transform: translateY(-10rem);

  display: flex;
  align-items: center;

  @media (max-width: 1440px) {
    height: 13vh;
  }

  @media (max-width: 768px) {
    height: 20vh;
    width: 90vw;
  }

  @media (max-width: 550px) {
    padding: 0 3rem;
    width: 90vw;
  }
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  width: 100%;

  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

interface InputProps {
  error: string;
}

const Input = styled.input<InputProps>`
  width: 85%;

  border-radius: 1rem;
  border: none;
  border: ${(props) => (props.error ? "2px solid red" : "none")};
  outline: none;

  padding: 0 5rem;

  font-size: 1.6rem;

  ::placeholder {
    font-size: 1.6rem;
    color: var(--color-neutral-grayish-violet);
  }

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 1000px) {
    width: 75%;
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 5rem;
    margin-bottom: 1rem;
  }
`;

interface ButtonProps {
  copy: string | null;
}

const Button = styled.button<ButtonProps>`
  font-family: inherit;
  font-size: 1.6rem;

  color: white;

  background-color: ${(props) =>
    props.copy === "Copied"
      ? "var(--color-primary-dark-violet)"
      : "var(--color-primary-cyan) "};

  padding: 1rem 2rem;
  border-radius: 1rem;
  border: none;

  cursor: pointer;
  transition: var(--tr);

  :hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
`;

const Error = styled.span`
  color: red;
  font-size: 1.6rem;
  font-style: italic;

  position: absolute;
  bottom: -3rem;
  left: 0rem;

  @media (max-width: 1440px) {
    bottom: -2.5rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;

  transform: translateY(-6rem);
`;

const LinkItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 2rem;

  background-color: white;

  font-size: 1.6rem;
  font-family: inherit;
  font-weight: 400;

  border-radius: 1rem;

  :not(:last-child) {
    margin-bottom: 2rem;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 1rem 2rem;

    width: 90vw;
  }
`;

const FullLink = styled.span`
  @media (max-width: 1000px) {
    margin-right: auto;
    margin-bottom: 1rem;
    margin: 1rem auto;

    border-bottom: 1px solid black;

    text-align: center;
    word-break: break-all;
  }
`;

const ShortLink = styled.span`
  color: var(--color-primary-cyan);
  margin-left: auto;
  margin-right: 4rem;

  @media (max-width: 1000px) {
    margin-left: auto;
    margin-right: 0;
    margin: 1rem auto;

    margin-bottom: 1rem;

    border-bottom: 1px solid var(--color-primary-cyan);
  }
`;

const InputComponent: React.FC = () => {
  const [error, setError] = useState<string>(""); // Состояние для вывода ошибки при валидации url

  const dispatch = useAppDispatch();

  const input = useAppSelector((state) => state.inputReducer.input); // Данные инпута
  const apiData = useAppSelector((state) => state.asyncReducer.url); // Данные из АПИ

  const validation = (input: string): boolean => {
    // Функиця валидации
    if (validator.isEmpty(input)) {
      setError("Please add a link");
      return false;
    } else if (!validator.isURL(input)) {
      setError("Invalid URL");
      return false;
    } else {
      setError("");
      return true;
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    // Функция при нажатии кнопки
    e.preventDefault();
    validation(input);

    if (validation(input)) {
      // Если валидация успешна - делаем запрос
      dispatch(fetchUrl(input));
      dispatch(setInput("")); // Очищаем инпут
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    // Сохраняем данные из инпута
    dispatch(setInput(e.target.value));
  };

  // РАБОТА С БУФЕРОМ ОБМЕНА
  const [copy, setCopy] = useState<string | null>(null);

  const handleCopy = (link: string): void => {
    navigator.clipboard.writeText(link).then(() => setCopy(link));
  };

  return (
    <Container>
      <InputContainer>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="Shorten a link here..."
            onChange={handleChange}
            error={error}
            value={input}
          />
          {error && <Error>{error}</Error>}
          <Button copy={null} type="submit">
            Shorten it!
          </Button>
        </Form>
      </InputContainer>

      <LinkContainer>
        {apiData &&
          apiData.map((el, idx) => {
            return (
              <LinkItem key={idx}>
                <FullLink>{el.result.original_link}</FullLink>

                <ShortLink>{el.result.full_short_link}</ShortLink>

                <Button
                  copy={copy === el.result.full_short_link ? "Copied" : "Copy"}
                  onClick={() => {
                    handleCopy(el.result.full_short_link);
                  }}
                >
                  {copy === el.result.full_short_link ? "Copied" : "Copy"}
                </Button>
              </LinkItem>
            );
          })}
      </LinkContainer>
    </Container>
  );
};

export default InputComponent;
