import React, { createContext, useState, useContext, ReactNode } from "react";

type Params = {
  page: string;
  department: string;
  gender: string;
  year: string;
  role: string;
  service: string;
  sort: string;
  keyword: string;
};

// Define the context type
interface FetchParamsContextType {
  fetchParams: Params;
  setFetchParams: React.Dispatch<React.SetStateAction<Params>>;
}

// Create the context with default values
const FetchParamsContext = createContext<FetchParamsContextType | undefined>(undefined);

// Create the provider component
export const FetchParamsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [fetchParams, setFetchParams] = useState<Params>({
    page: "1",
    department: "",
    gender: "",
    year: "",
    role: "",
    service: "",
    sort: "",
    keyword: "",
  });

  return (
    <FetchParamsContext.Provider value={{ fetchParams, setFetchParams }}>
      {children}
    </FetchParamsContext.Provider>
  );
};

// Custom hook for consuming the context
export const useFetchParams = () => {
  const context = useContext(FetchParamsContext);
  if (!context) {
    throw new Error("useFetchParams must be used within a FetchParamsProvider");
  }
  return context;
};