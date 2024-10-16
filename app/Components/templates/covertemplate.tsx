import React from 'react'
import Nav from '../molecules/nav';
import Footer from '../molecules/footer';
import Header from '../organisms/header';

interface Template{
    children: React.ReactNode;
 };


const Covertemplate = ({children}:Template) => {
  
  
    return(
        <main className=''>
            <Header/>
            {children}
            <Footer/>
        </main>
    )
  
}

export default Covertemplate