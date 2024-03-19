// import React, { createContext, useState, useContext, useEffect } from 'react'

// const DarkModeContext = createContext()

// export const DarkModeProvider = ({ children }) => {
//   const [darkMode, setDarkMode] = useState(getInitialMode())

//   // Helper function to get initial mode
//   function getInitialMode() {
//     const savedMode = JSON.parse(localStorage.getItem('darkMode'))
//     return savedMode || false // Default to false if no mode is saved
//   }

//   // Apply dark mode when darkMode state changes
//   useEffect(() => {
//     document.documentElement.classList.toggle('dark-mode', darkMode)
//     localStorage.setItem('darkMode', JSON.stringify(darkMode))
//   }, [darkMode])

//   return
//   ;<DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>
// }

// export const useDarkMode = () => useContext(DarkModeContext)
