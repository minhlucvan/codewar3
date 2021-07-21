import React from 'react'

export const appContext = React.createContext({})

export const AppContextProvider = ({ children }) => {
  const contextValue = React.useMemo(() => ({}), [])

  return (
    <appContext.Provider value={contextValue}>{children}</appContext.Provider>
  )
}
