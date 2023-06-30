import React from "react";

interface User {
  name: string;
  email: string;
}

export const UserProfile = (user: User) => {
  return (
    <div style={{margin:"20px"}}>
      User Profile
      {/* <div>{user.name}</div> */}
      {/* <div>{user.email}</div> */}
    </div>
  );
};
