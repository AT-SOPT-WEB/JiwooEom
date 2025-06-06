import { createContext, useContext, useState } from 'react';

type NicknameContextType = {
  nickname: string;
  updateGlobalNickname: (nickname: string) => void;
};

const NicknameContext = createContext<NicknameContextType | undefined>(undefined);

export const NicknameProvider = ({ children }: { children: React.ReactNode }) => {
  const [nickname, setNickname] = useState('');

  const updateGlobalNickname = (newName: string) => {
    setNickname(newName);
  };

  return (
    <NicknameContext.Provider value={{ nickname, updateGlobalNickname }}>
      {children}
    </NicknameContext.Provider>
  );
};

export const useNickname = () => {
  const context = useContext(NicknameContext);
  if (!context) throw new Error('useNickname must be used within NicknameProvider');
  return context;
};
