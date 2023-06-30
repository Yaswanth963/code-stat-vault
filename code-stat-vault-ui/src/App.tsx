import React from "react";
import styled from "@emotion/styled";
import { UserContext } from "./code-stat-vault/context";
import { User } from "./code-stat-vault/types";

const StyledDiv = styled.div`
  width: "100%";
  height: "100%";
`;

const CodeStatVault = ({
  email,
  friends,
  isAdminUser,
  isLoggedIn,
  isSuperUser,
  name,
}: User) => {
  return (
    <UserContext.Provider
      value={{
        email: email,
        name: name,
        friends: friends,
        isAdminUser: isAdminUser,
        isLoggedIn: isLoggedIn,
        isSuperUser: isSuperUser,
      }}
    >
      <StyledDiv>Code Stat Vault</StyledDiv>
    </UserContext.Provider>
  );
};

export default CodeStatVault;
