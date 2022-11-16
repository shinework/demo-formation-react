import { createContext, useState } from "react";

export const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [locale, setLocale] = useState("fr");

  return (
    <AppContext.Provider value={{ username, setUsername, locale, setLocale }}>
      {children}
    </AppContext.Provider>
  );
};
