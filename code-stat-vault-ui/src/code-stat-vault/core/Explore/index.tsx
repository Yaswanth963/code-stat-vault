import React, { useEffect } from "react";
import styled from "@emotion/styled";
import type { CollapseProps } from "antd";
import { Collapse } from "antd";

const StyledDiv = styled.div`
  margin: 5%;
`;

export const ExplorePage = () => {
  const text: string = "Hi hello Welcome!!!";

  useEffect(() => {}, []);
  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "This is panel header 1",
      children: <p>{text}</p>,
    },
    {
      key: "2",
      label: "This is panel header 2",
      children: <p>{text}</p>,
    },
    {
      key: "3",
      label: "This is panel header 3",
      children: <p>{text}</p>,
    },
  ];

  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return (
    <StyledDiv>
      <Collapse items={items} onChange={onChange} expandIconPosition="end" />
    </StyledDiv>
  );
};
