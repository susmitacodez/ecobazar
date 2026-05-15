
import './App.css'
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import Registration from './pages/Registration';
import MainLayout from './components/layouts/MainLayout';
import SignIn from './pages/SignIn';
import Forget from './pages/Forget';


function App() {


  return (

    <Routes>
      <Route element={< MainLayout />} >
        <Route path="/" element={< Home />} />
        <Route path="/registration" element={< Registration />} />
        <Route path="/signin" element={< SignIn />} />
        <Route path="/forget" element={< Forget />} />
        
        
      
      </Route>

    </Routes>

  )
}

export default App
