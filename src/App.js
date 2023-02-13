import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Account from './Pages/Account';
import {AuthContextProvider} from './context/AuthContext';

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/account" element={<Account />}/>
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
