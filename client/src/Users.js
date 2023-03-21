import React, { useState } from "react";
import UserListAll from "./UserListAll";
import SearchWGUser from "./SearchWGUser";


export default function Users({ wgUsers }) {
  const [searchTerm, setSearchTerm] = useState("");
  console.log(wgUsers)


  const displayedUsers = wgUsers.filter((wgUser) => {
    return wgUser.username.includes(searchTerm);
  });
  console.log('searched username', searchTerm)

  return (
    <main>
      <h1 className="mb-5 hero d-flex d-none d-md-block">Outfit Inspo</h1>
      <SearchWGUser setSearchTerm={setSearchTerm} />
      <UserListAll
        wgUsers={displayedUsers}
      />
    </main>
  );
}