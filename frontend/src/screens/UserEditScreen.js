import React from "react";

export default function UserEditScreen() {
  return (
    <div>
      <form className="form" onSubmit={submitHandle}>
        <div>
          <h1>Edit User {name}</h1>
        </div>
      </form>
    </div>
  );
}
