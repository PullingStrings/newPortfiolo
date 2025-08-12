// src/components/layout/Footer.jsx
import styled from "styled-components";

const Foot = styled.footer`
  padding: 2rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.lightGray};
  font-size: 0.9rem;
`;

export default function Footer() {
  return (
    <Foot>
      &copy; {new Date().getFullYear()} Sibusiso 'Tito' Zwane — Built with ❤️
    </Foot>
  );
}
