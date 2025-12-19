import { createContext, useContext, useState } from "react";

const regionContext = createContext();

export default function RegionContextProv({ children }) {
  const [reg, setRegion] = useState("");
  return (
    <regionContext.Provider
      value={{
        reg,
        setRegion,
      }}
    >
      {children}
    </regionContext.Provider>
  );
}

export const RegionHand = () => {
  return useContext(regionContext);
};
