'use client';

import { createContext, useContext, useState } from 'react';

const SearchContext = createContext<any>(null);

export const SearchProvider = ({ children }: any) => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  return (
    <SearchContext.Provider value={{ keyword, setKeyword, category, setCategory }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
