import { createContext, useState } from "react";

export const userName = createContext();

const ContexProvider = ({children}) => {
  const [post, usePost] = useState("refactor contex");

  return (<userName.Provider value={post}>{children}</userName.Provider>)
};
export default ContexProvider;
