"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

type AppContextType = {
  pageName: string;
  setPageName: (value: string) => void;
};

const AppContext = createContext<AppContextType>({
  pageName: "",
  setPageName: () => {},
});

export const AppContextProvider = ({ children }: Props) => {
  const [pageName, setPageName] = useState("");

  return (
    <AppContext.Provider value={{ pageName, setPageName }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
