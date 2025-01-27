import { createContext, ReactNode, useContext, useState } from "react";

interface ConfiguratorProviderProps {
  children: ReactNode;
}

interface ConfiguratorContextType {
  legs: number;
  setLegs: React.Dispatch<React.SetStateAction<number>>;
  legsColor: string;
  setLegsColor: React.Dispatch<React.SetStateAction<string>>;
  tableWidth: number;
  setTableWidth: React.Dispatch<React.SetStateAction<number>>;
}

const ConfiguratorContext = createContext<ConfiguratorContextType | undefined>(
  undefined
);

export const ConfiguratorProvider = ({
  children,
}: ConfiguratorProviderProps) => {
  const [legs, setLegs] = useState(0);
  const [legsColor, setLegsColor] = useState("#777777");
  const [tableWidth, setTableWidth] = useState(100);
  return (
    <ConfiguratorContext.Provider
      value={{
        legs,
        setLegs,
        legsColor,
        setLegsColor,
        tableWidth,
        setTableWidth,
      }}
    >
      {children}
    </ConfiguratorContext.Provider>
  );
};

export const useConfigurator = () => {
  return useContext(ConfiguratorContext);
};
