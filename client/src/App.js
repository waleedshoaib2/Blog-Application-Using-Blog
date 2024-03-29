import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes> 
      <Route path ='/' element= {<Home />} />
      <Route path = '/Dashboard' element = {<Dashboard />} />
      <Route path = '/Signin' element = {<SignIn />} />
      <Route path = '/SignUp' element = {<SignUp />} />


    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App