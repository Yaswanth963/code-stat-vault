import React from "react";
import styled from "@emotion/styled";
import { Home } from "./code-stat-vault/core/Home";
import { Chats } from "./code-stat-vault/core/Chats";

const StyledDiv = styled.div`
  width: "100%";
  height: "100%";
`;

function App() {
  return (
    <StyledDiv>
      <Home />
      <Chats />
    </StyledDiv>
  );
}

export default App;
