import { createContext, useContext, useState } from "react";

const pokeContext = createContext();

export default function PokeContextProv({ children }) {
  const [poke, setPoke] = useState([]);
  return (
    <pokeContext.Provider
      value={{
        poke,
        setPoke,
      }}
    >
      {children}
    </pokeContext.Provider>
  );
}

export const pokeHand = () => {
  return useContext(pokeContext);
};
