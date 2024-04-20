import { ReactNode, createContext, useContext } from "react";

interface GuardProviderProps {
  children: ReactNode;
}

type GuardContextType = {};
const GuardContext = createContext<GuardContextType>({});

export const useGuard = () => {
  return useContext(GuardContext);
};

export const GuardProvider = ({ children }: GuardProviderProps) => {
  const values = {};

  return (
    <GuardContext.Provider value={values}>{children}</GuardContext.Provider>
  );
};

export default GuardContext;
