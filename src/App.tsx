import React from "react";

import styled from "styled-components";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionTwo from "./components/SectionTwo/SectionTwo";

const Container = styled.main`
  max-width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </Container>
  );
};

export default App;
