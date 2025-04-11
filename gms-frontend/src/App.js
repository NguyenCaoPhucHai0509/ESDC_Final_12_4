import './App.css';
import Dashboard from './Pages/Dashboard/dashboard';
import Home from './Pages/Home/home';
import Sidebar from './Components/SideBar/sidebar';
import {Routes, Route, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Member from './Pages/Member/member';

function App() {
  const navigate = useNavigate(); 
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    let isLogedIn = sessionStorage.getItem("isLogin");
    if(isLogedIn){
      setIsLogin(true);
      // navigate("/dashboard")
    }
    else {
      navigate("/")
    }

  }, [navigate])


  return (
    <div className="flex">
      {
        isLogin && <Sidebar />
      }
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/dashboard' element={<Dashboard/>}/>  
        <Route path='/member' element={<Member/>}/>
      </Routes>
    </div>
  );
}

export default App;
