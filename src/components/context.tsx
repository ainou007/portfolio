'use client';
import { FC, ReactNode, createContext, useState } from 'react';

interface ContextType {
  isVisible: boolean;
  toggleVisibility: (visibility: boolean) => void;
}
const initState: ContextType = {
  isVisible: true,
  toggleVisibility: () => {},
};
export const navbarContext = createContext<ContextType>(initState);

export const ContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = (visibility: boolean) => setIsVisible(visibility);

  return (
    <navbarContext.Provider value={{ isVisible, toggleVisibility }}>
      {children}
    </navbarContext.Provider>
  );
};
