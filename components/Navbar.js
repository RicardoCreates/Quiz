import styled from "styled-components";

export default function Navbar() {
  return (
    <StyledNavbar>
      <h1>Navbar</h1>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #303030;
  color: white;
`;
