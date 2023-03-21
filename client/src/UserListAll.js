import UserCard from "./UserCard";
import React from "react";

export default function UserListAll ({ wgUsers, onAddHanger, user }) {
    return (
        <ul className="cards">
      {wgUsers.map((wgUser) => {
        return (
          <UserCard
            key={wgUser.id}
            wgUser={wgUser}
          />
        );
        

        
      })}
    </ul>
  );

    
}