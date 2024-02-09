import React from 'react'
import ReactDOM from 'react-dom/client'

import Navbar from './Components/Navigationbar'
import Leftside from './Components/Leftsidebar'
import Content from './Components/Content'
import Topright from './Components/Topright'
import Bottomright from './Components/bottomright'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

 
   <Navbar/>
   <Content/>
   <Leftside/>
   <Topright/>
   <Bottomright/>
   

  </React.StrictMode>
)
