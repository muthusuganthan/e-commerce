import React, { createContext } from "react";

const defaultContext = {
  name: "Guest",
  age: 0,
  setUser: () => {},
};

const Usedatacontext = createContext(defaultContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState(defaultContext);

  const value = {
    ...user,
    setUser: (newUser) => setUser({ ...user, ...newUser }),
  };

  return (
    <Usedatacontext.Provider value={value}>
      {children}
    </Usedatacontext.Provider>
  );
};

export default Usedatacontext;
