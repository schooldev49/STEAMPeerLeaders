
// IMPORT PAGES // 
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AboutUs from './pages/AboutUs';
import Monthly from './pages/monthlychallenge/Monthly';
import AdminPage from './pages/admin/AdminPage';
import AdminLogin from './pages/admin/AdminLogin';
import Layout from './components/Layout';

// IMPORT REACT ROUTER DOM

import {BrowserRouter, Routes, Route} from 'react-router-dom';

// IMPORT CSS FILES 

import './App.css';

// FIREBASE AUTH

import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

// APP RENDERING

const App = () => {
  const [user] = useAuthState(auth);
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' index element={<Home/>}/>
        <Route path='/aboutus/' element={<AboutUs/>}/>
        <Route path='/monthlychallenge/' element={<Monthly/>}/>
        <Route path='/admin/' element={user ? <AdminPage user={user}/> : <AdminLogin/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
