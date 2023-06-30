import React from "react";
import { User } from "../../types";
import styled from "@emotion/styled";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface FriendsProps {
  friends: User[];
}

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const StyledDiv = styled.div`
  width: 30vw;
  border-left: 1px solid #b4b4b4;
`;

export const Friends = ({ friends }: FriendsProps) => {
  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      width: 150,
    },
    {
      title: "Age",
      dataIndex: "age",
      width: 150,
    },
  ];

  const data: DataType[] = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      key: i,
      name: `Edward King ${i}`,
      age: 32,
      address: `London, Park Lane no. ${i}`,
    });
  }

  return (
    <StyledDiv>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        scroll={{ y: 570 }}
      />
    </StyledDiv>
  );
};
