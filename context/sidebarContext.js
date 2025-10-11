"use client";

import React, { createContext, useContext, useState } from 'react';

const SidebarContext = createContext();

export const useSidebar = () => useContext(SidebarContext);

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

const [authState, setAuthState] = useState("none")


  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  const handleToggleAuthFunction = (type)=>{
   setAuthState(type)
  }

  const closeAuthState = () => {
    console.log('first')
    setAuthState(0);
  }
  

  const values = {
    isSidebarOpen,
    toggleSidebar,
    handleToggleAuthFunction,
    authState,
    closeAuthState
  }

  return (
    <SidebarContext.Provider value={values}>
      {children}
    </SidebarContext.Provider>
  );
};
