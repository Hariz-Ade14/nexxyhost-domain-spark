import React,{JSX} from 'react'
import Footer from './Footer'
import Header from './Header'
const Layout = ({children}: {children: JSX.Element}) => {
  return (
    <div>
        <Header/>
        <div  className="min-h-screen bg-white">
              {children}
        </div>
        <Footer/>
    </div>
  )
}

export default Layout