import { createContext, useContext, useState } from "react";

const typeContext = createContext();

export default function TypeContextProv({ children }) {
  const [type, setType] = useState("");
  return (
    <typeContext.Provider
      value={{
        type,
        setType,
      }}
    >
      {children}
    </typeContext.Provider>
  );
}

export const TypeHand = () => {
  return useContext(typeContext);
};
