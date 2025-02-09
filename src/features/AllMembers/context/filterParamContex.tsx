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

interface FetchParamsContextType {
  fetchParams: Params;
  setFetchParams: React.Dispatch<React.SetStateAction<Params>>;
}

const FetchParamsContext = createContext<FetchParamsContextType | undefined>(
  undefined
);

export const FetchParamsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [fetchParams, setFetchParams] = useState<Params>({
    page: "1",
    department: "",
    gender: "",
    year: "",
    role: "",
    service: "",
    sort: "first_name",
    keyword: "",
  });

  return (
    <FetchParamsContext.Provider value={{ fetchParams, setFetchParams }}>
      {children}
    </FetchParamsContext.Provider>
  );
};

export const useFetchParams = () => {
  const context = useContext(FetchParamsContext);
  if (!context) {
    throw new Error("useFetchParams must be used within a FetchParamsProvider");
  }
  return context;
};
