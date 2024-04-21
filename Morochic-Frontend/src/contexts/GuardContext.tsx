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

  // const fetchMe = async (): Promise<any> => {
  //   if (!currentUser && Object.keys(currentUser).length == 0) {
  //   try {
  //     const response = await axiosClient.post("/me");
  //     setCurrentUser(response.data.user[0]);
  //     return true;
  //   } catch (error) {
  //     console.log(error);
  //     return false;
  //   }
  //   }
  // };

  const values = {};

  return (
    <GuardContext.Provider value={values}>{children}</GuardContext.Provider>
  );
};

export default GuardContext;
