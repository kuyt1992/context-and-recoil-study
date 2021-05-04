import { Link } from "react-router-dom";
import styled from "styled-components";

export const Footer = () => {
  return <SFooter>&copy; 2021 text Inc.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #1687a7;
  color: #f6f5f5;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
