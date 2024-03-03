import  { createContext, useState } from 'react';

const ActiveNavbarContext = createContext(null);

export const ActiveNavbarProvider = ({ children }) => {
  const [activeElement, setActiveElement] = useState(1);

  const setActive = (elementName) => setActiveElement(elementName);

  return (
    <ActiveNavbarContext.Provider value={{ activeElement, setActive }}>
      {children}
    </ActiveNavbarContext.Provider>
  );
};