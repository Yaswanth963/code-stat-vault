import React from "react";
import styled from "@emotion/styled";
import { Friends } from "./Friends";
import { User } from "../../types";
import { MessageBox } from "./MessageBox";
const StyledDiv = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

interface ChatsProps {
  friends: User[];
}

export const Chats = ({ friends }: ChatsProps) => {
  const handleMessage = (message: string) => {
    console.log(message);
  };

  return (
    <StyledDiv>
      <div
        style={{ height: "5%", width: "100vw", border: "0px solid #b4b4b4" }}
      >
        Chat Heading
      </div>
      <div style={{ display: "flex", height: "95%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ height: "95%", width: "70vw" }}>Chat</div>
          <MessageBox handleMessage={handleMessage} />
        </div>
        <Friends friends={friends} />
      </div>
    </StyledDiv>
  );
};
