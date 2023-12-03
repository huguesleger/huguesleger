"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

interface Props {
  children: ReactNode;
}

type AppContextType = {
  pageName: string;
  valueCarousel: number;
  visibleEl: number;
  setPageName: (value: string) => void;
  setValueCarousel: (value: number) => void;
  setVisibleEl: (value: number) => void;
};

const AppContext = createContext<AppContextType>({
  pageName: "",
  valueCarousel: 0,
  visibleEl: 0,
  setPageName: () => {},
  setValueCarousel: () => {},
  setVisibleEl: () => {},
});

export const AppContextProvider = ({ children }: Props) => {
  const [pageName, setPageName] = useState("");
  const [valueCarousel, setValueCarousel] = useState(0);
  const [visibleEl, setVisibleEl] = useState(0);

  return (
    <AppContext.Provider
      value={{
        pageName,
        setPageName,
        valueCarousel,
        setValueCarousel,
        visibleEl,
        setVisibleEl,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
