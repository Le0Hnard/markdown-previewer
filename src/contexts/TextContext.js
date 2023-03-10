import { createContext, useState } from "react";

export const TextContext = createContext();

export const TextContextProvider = ({ children }) => {
  const [text, setText] = useState("Some content");

  return (
    <TextContext.Provider value={{text, setText}}>
      { children }
    </TextContext.Provider>
  );
};

export default TextContext;
