import styled from "styled-components";

export default function Navbar() {
  return (
    <StyledNavbar>
      <h1>Quiz</h1>
    </StyledNavbar>
  );
}

const StyledNavbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 3.8rem;
  background-color: #fdfefe;
  width: 100vw;
  box-shadow: 2px 5px 30px lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  min-width: 300px;
`;
