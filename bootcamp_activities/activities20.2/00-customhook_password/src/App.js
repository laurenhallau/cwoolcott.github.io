import React from "react";
import SmartPassword from "./hook/useSmartPassword.js"

function App() {
  const [isValid, onPasswordChange] = SmartPassword();
  return (
    <div className="Form">
      <label htmlFor="password">Password: </label>
      <input
        id="password"
        onChange={e => onPasswordChange(e)}
      />
      {isValid ? <p>Your password is valid </p> : null}
    </div>
  );
}

export default App;
