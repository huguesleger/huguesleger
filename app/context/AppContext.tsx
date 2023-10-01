"use client";
import ScrollLoco from "@/components/layout/ScrollLoco";
import React, { createContext, useContext, useState } from "react";

type AppContextType = {
  pageName: string;
  setPageName: (value: string) => void;
};

const AppContext = createContext<AppContextType>({
  pageName: "",
  setPageName: () => {},
});

export const AppContextProvider = ({ children }: any) => {
  const [pageName, setPageName] = useState("");

  return (
    <AppContext.Provider value={{ pageName, setPageName }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
