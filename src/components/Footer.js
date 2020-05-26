import React from "react";
import styled from "styled-components";

const FooterP = styled.p`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 0.3ch;

  @font-face {
    font-family: "Caviar Dreams";
    src: local("Caviar Dreams"), url(../fonts/CaviarDreams) format("truetype");
  }

  font-family: "Caviar Dreams";
`;

export const Footer = () => {
  return <FooterP>@venturarts_</FooterP>;
};
