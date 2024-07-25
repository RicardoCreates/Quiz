import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <h1>Footer</h1>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  background: #303030;
  width: 100vw;
  color: white;
`;
