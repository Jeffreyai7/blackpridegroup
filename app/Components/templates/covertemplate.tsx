import React from 'react'

interface Template{
    children: React.ReactNode;
 };


const Covertemplate = ({children}:Template) => {
  
  
    return(
        <main>
            {children}
        </main>
    )
  
}

export default Covertemplate