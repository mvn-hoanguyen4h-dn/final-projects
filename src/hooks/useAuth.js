import { useState } from "react";
import { useHistory } from "react-router-dom";

function useAuth() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  const [isLogged, setIsLogged] = useState(!!user);
  const history = useHistory();

  const login = (email, password) => {
    return new Promise((res, rej) => {
      setTimeout(() => {
        localStorage.setItem("user", JSON.stringify({ email }));
        setUser({ email });
        setIsLogged(true);
        history.push("/management");
        res({ email });
      }, 1000);
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setIsLogged(false);
    history.push("/");
  };

  return { isLogged, login, logout };
}

export default useAuth;
