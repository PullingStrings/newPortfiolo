import styled from 'styled-components';

const Foot = styled.footer`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 18px 20px 24px;
  background: #f3f0e8;
  color: #111;
  border-top: 1px solid rgba(17, 17, 17, 0.2);
  font-family: 'Inter', sans-serif;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .06em;
  text-transform: uppercase;

  span:last-child { color: #ff4b12; }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 6px;
  }
`;

export default function Footer() {
  return (
    <Foot>
      <span>© {new Date().getFullYear()} Tito Zwane</span>
      <span>Make the work clear. Make Tito weird.</span>
    </Foot>
  );
}
