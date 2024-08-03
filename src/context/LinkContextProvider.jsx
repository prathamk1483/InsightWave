import React from 'react'
import linkContext from './linkContext'
import {useState} from 'react'
function LinkContextProvider({children}) {
  const [link,setLink] = useState('')
  return (
    <linkContext.Provider value={{link,setLink}}>
        {children}
    </linkContext.Provider>
  )
}
export default LinkContextProvider