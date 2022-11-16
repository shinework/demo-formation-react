import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../core/contexts/app-context";

const Login = () => {
  const navigate = useNavigate();
  const { username, setUsername } = useContext(AppContext);

  return (
    <div>
      <h1>Login</h1>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button
        onClick={() => {
          navigate("/chat");
        }}
      >
        <FormattedMessage id="login" />
      </button>
    </div>
  );
};

export default Login;
