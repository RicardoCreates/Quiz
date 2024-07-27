import Link from "next/link";
import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <StyledLink href="/"> Home </StyledLink>
        <StyledLink href="/favorites"> Favorites </StyledLink>
        <StyledLink href="/quiz"> Quiz </StyledLink>
      </StyledFooter>
    </>
  );
}

const StyledFooter = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  background: #303030;
  width: 100vw;
  color: white;
  font-size: 1.5rem;
  box-shadow: -1px -1px 10px #888888;
  height: 3.8rem;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
`;
