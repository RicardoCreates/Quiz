import styled from "styled-components";

export default function Favorites() {
  return (
    <StyledContainer>
      <StyledDiv>
        <h1>Favorites</h1>
      </StyledDiv>
    </StyledContainer>
  );
}

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  margin-top: 40px;
  width: 80vw;
  border-radius: 10px;
  box-shadow: -1px -1px 10px #888888;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;
