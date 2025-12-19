import { createContext, useContext, useState } from "react";

const numberContext = createContext();

export default function NumberContextProv({ children }) {
  const [numbers, setNumbers] = useState([]);
  return (
    <numberContext.Provider
      value={{
        numbers,
        setNumbers,
      }}
    >
      {children}
    </numberContext.Provider>
  );
}

export const numberHand = () => {
  return useContext(numberContext);
};
