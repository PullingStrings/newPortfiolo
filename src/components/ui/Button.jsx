// src/components/ui/Button.jsx
import styled from "styled-components";

export const Button = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-weight: bold;
  background: ${({ theme, variant }) =>
    variant === "secondary" ? "transparent" : theme.colors.primary};
  color: ${({ theme, variant }) =>
    variant === "secondary" ? theme.colors.primary : "#fff"};
  border: ${({ theme, variant }) =>
    variant === "secondary" ? `2px solid ${theme.colors.primary}` : "none"};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme, variant }) =>
      variant === "secondary" ? theme.colors.primary : "#0051a3"};
    color: #fff;
  }
`;
