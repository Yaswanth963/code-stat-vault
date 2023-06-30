import styled from "@emotion/styled";
import React, { useState } from "react";

interface MessageBoxProps {
  handleMessage: (message: string) => void;
}

const StyledDiv = styled.input`
  width: 67vw;
  height: 30px;
  border-radius: 40px;
  border: 2px solid #b4b4b4;
  margin: 8px;
  &::placeholder {
    padding-left: 15px;
  }
`;

export const MessageBox = ({ handleMessage }: MessageBoxProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e: any) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      handleMessage(inputValue);
      setInputValue("");
    }
  };

  return (
    <StyledDiv
      placeholder="Type your message here..."
      value={inputValue}
      onChange={handleInput}
      onKeyDown={handleKeyDown}
    />
  );
};
